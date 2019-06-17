<template>
  <div>
    <el-row>
      <el-col :lg="12" :offset="4" style="text-align:center">
        <h2>查看他人完成信息</h2>
        <el-form :model="query" label-width="100px">
          <el-form-item label="用户id" prop="id">
            <!-- <el-input v-model="query.uId"></el-input> -->
            <Input v-model="query.uId" placeholder="Enter something..." style="width: 300px"/>
          </el-form-item>
          <el-form-item label="任务id" prop="id">
            <!-- <el-input v-model="query.tId"></el-input> -->
            <Input v-model="query.tId" placeholder="Enter something..." style="width: 300px"/>
          </el-form-item>
          <el-form-item>
            <Button type="primary" @click="Query">查询</Button>
            <!-- <el-button>取消</el-button> -->
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-dialog title="浏览教师信息" :visible.sync="dialogVisible" width="40%">
      <el-table border :data="isSubmited" style="width:100%">
        <el-table-column prop="task.name" label="任务名称" align="center"></el-table-column>
        <el-table-column prop="timeOut" label="是否超时" align="center" :formatter="TimeOutFormatter"></el-table-column>
        <el-table-column prop="content" label="回复内容" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="checkDetail(scope.row)" type="text" size="small">查看详细信息</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <Button type="primary" @click="dialogVisible = false ">确 定</Button>
        <Button @click="dialogVisible = false">取 消</Button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { checkIsSubmitedTasks } from "../../../api/api";
import { checkIsSubmitedTasks2 } from "../../../api/api";
import { checkIsSubmitedTasks3 } from "../../../api/api";
export default {
  data: () => ({
    query: {
      uId: "",
      tId: ""
    },
    dialogVisible: false,
    isSubmited: []
  }),
  methods: {
    Query() {
      if (this.query.uId != "" && this.query.tId == "") {
        checkIsSubmitedTasks(this.query.uId).then(res => {
          this.dialogVisible = true;
          this.isSubmited = res;
        });
      } else if (this.query.uId == "" && this.query.tId != "") {
        checkIsSubmitedTasks2(this.query.tId).then(res => {
          this.dialogVisible = true;
          this.isSubmited = res;
        });
      } else {
        checkIsSubmitedTasks3(this.query).then(res => {
          this.dialogVisible = true;
          this.isSubmited = res;
        });
      }
    },
    checkDetail(row) {
      console.log(row);
    },
    TimeOutFormatter(row) {
      return row ? "是" : "否";
    }
  }
};
</script>
<style>
</style>
