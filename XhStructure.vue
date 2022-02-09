<template>
  <div class="xh-stru">
    <div class="xh-stru__hd">
      {{ cellType === 'classroom' ? '教室' : '部门' }}
    </div>
    <div class="xh-stru__bd">
      <el-input
        v-model="searchInput"
        :placeholder="placeholder"
        size="small"
        prefix-icon="el-icon-search"
        class="search-input"/>
      <div
        v-loading="loading"
        class="search-list">

        <el-tree
          ref="tree"
          :data="dataList"
          :props="defaultProps"
          :filter-node-method="filterNode"
          :default-expanded-keys="expandedItem"
          :default-checked-keys="checkItem"
          class="filter-tree"
          show-checkbox
          node-key="id"
          check-strictly
          default-expand-all
          @check="handleCheck"/>

      </div>
    </div>
    <div class="xh-stru__ft">
      <span class="select-info">已选择<span class="select-info--num">{{ selectedData.length }}</span>项</span>
      <el-button type="text" @click="clearAll">清空</el-button>
    </div>
  </div>
</template>
<script type="text/javascript">
import { depList } from '@/api/common'
import { crmClassroomSelectList } from '@/api/educationmanage/classSchedule'

export default {
  name: 'XhStructure', // 新建 structure
  components: {},
  props: {
    show: {
      type: Boolean,
      default: true
    },
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 多选框 只能选一个
    radio: {
      type: Boolean,
      default: false
    },
    // 已选信息
    selectedData: {
      type: Array,
      default: () => {
        return []
      }
    },
    infoParams: {
      type: Object,
      default: () => {
        return {}
      }
    },
    cellType: {
      type: String,
      default: ''
    },
    classroomId: [Number, String]
  },
  data() {
    return {
      breadcrumbList: [], // 面包屑数据
      selectItems: [], // 选择项
      dataList: [], // 展示数据
      loading: false, // 加载动画
      searchInput: '',

      checkItem: [],
      expandedItem: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    placeholder() {
      return this.cellType === 'classroom' ? '搜索教室名称' : '搜索部门名称'
    }
  },
  watch: {
    selectedData(val) {
      if (val.length) {
        const newList = []
        for (let index = 0; index < val.length; index++) {
          const element = val[index]
          if (element.deptId) {
            newList.push({
              ...element,
              id: element.deptId
            })
          } else {
            newList.push(element)
          }
        }
        const ids = newList.map(item => {
          return item.id
        })
        this.expandedItem = this.checkItem = ids
        this.$refs.tree.setCheckedNodes(val)
      } else {
        this.$refs.tree.setCheckedNodes([])
        this.expandedItem = this.checkItem = []
      }
    },

    show(value) {
      if (this.dataList && this.dataList.length == 0) {
        this.getStructureList()
      }
    },
    searchInput(val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    // 更改勾选的操作
    handleCheck(data, obj) {
      const keys = this.$refs.tree.getCheckedKeys()
      if (keys.length) {
        this.$refs.tree.setCheckedNodes([])
        this.$refs.tree.setCheckedNodes([data])
        this.checkItem = [data.id]
        this.expandedItem = [data.id]
      } else {
        this.$refs.tree.setCheckedNodes([])
        this.checkItem = []
        this.expandedItem = []
      }
      if (obj.checkedKeys.length) {
        this.$emit('changeCheckout', [data])
      } else {
        this.$emit('changeCheckout', [])
      }
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    /**
     * 部门列表数据
     */
    getStructureList() {
      this.loading = true
      if (this.cellType === 'classroom') {
        crmClassroomSelectList({ deptId: this.classroomId }).then(res => {
          if (res.data.length) {
            this.dataList = res.data.map(item => {
              item.id = item.classroomId
              item.label = item.classroomName
              return item
            })
          } else {
            this.dataList = []
          }
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      } else {
        depList({
          type: 'tree',
          centre: 1
        })
          .then(res => {
            this.dataList = res.data
            this.loading = false
          })
          .catch(() => {
            this.loading = false
          })
      }
    },

    clearAll() {
      this.$refs.tree.setCheckedNodes([])
      this.checkItem = []
      this.expandedItem = []
      this.$emit('changeCheckout', [])
    }
  }
}
</script>
<style lang="scss" scoped>
.search-list {
  padding: 5px;
  height: 248px;
  overflow: auto;
}
.stru-list {
  padding: 5px;
  font-size: 13px;
  .stru-check {
    margin-right: 8px;
  }
  .stru-name {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .stru-enter {
      margin-right: 8px;
    }
  }
}

// 框子
.xh-stru {
  color: #333;
  font-size: 12px;
  &__hd {
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid $xr-border-line-color;
  }

  &__bd {
    padding: 10px 12px;
  }

  &__ft {
    padding: 5px 12px;
    background: #f7f8fa;
    border-top: 1px solid $xr-border-line-color;
    .el-button {
      font-size: 12px;
    }
  }
}

// 选择信息
.select-info {
  display: inline-block;
  width: calc(100% - 30px);

  &--num {
    color: $xr-color-primary;
  }
}

// check样式
.el-checkbox {
  /deep/ .el-checkbox__label {
    color: #333;
  }
}

.search-input {
  /deep/ .el-input__inner {
    background-color: #F4F4F4;
    border: none;
  }
}
</style>
