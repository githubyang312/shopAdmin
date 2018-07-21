<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品Id"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品Id"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品Id"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品Id"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="100">
      <template slot-scope="scope">
        <p>{{ scope.row.name }}</p>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<!--<script>-->
<!--export default {-->
<!--data() {-->
<!--return {-->
<!--tableData: [{-->
<!--date: '2016-05-02',-->
<!--id: 1,-->
<!--name: '王小虎',-->
<!--address: '上海市普陀区金沙江路 1518 弄'-->
<!--}, {-->
<!--date: '2016-05-04',-->
<!--name: '王小虎',-->
<!--id: 1,-->
<!--address: '上海市普陀区金沙江路 1517 弄'-->
<!--}, {-->
<!--date: '2016-05-01',-->
<!--name: '王小虎',-->
<!--id: 1,-->
<!--address: '上海市普陀区金沙江路 1519 弄'-->
<!--}, {-->
<!--date: '2016-05-03',-->
<!--id: 1,-->
<!--name: '王小虎',-->
<!--address: '上海市普陀区金沙江路 1516 弄'-->
<!--}]-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--handleEdit(index, row) {-->
<!--console.log(index, row);-->
<!--},-->
<!--handleDelete(index, row) {-->
<!--console.log(index, row);-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->
<script>
  import { getList } from '@/api/table'

  export default {
    data() {
      return {
        tableData: null,
        listLoading: true
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getList(this.listQuery).then(response => {
          this.list = response.data.items
          this.listLoading = false
        })
      }
    }
  }
</script>
