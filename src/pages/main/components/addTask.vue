<template>
  <div>
    <el-row>
      <el-col :lg="12" :offset="4" style="text-align:center">
        <h2 v-if="taskInfo.id!=''">修改任务信息</h2>
        <h2 v-else>创建新任务</h2>
        <el-form :model="taskInfo" :rules="rules" :ref="taskInfo" label-width="100px">
          <el-form-item label="任务名称" prop="name">
            <!-- <el-input v-model="taskInfo.name"></el-input> -->
            <Input v-model="taskInfo.name" placeholder="Enter something..." style="width: 300px"/>
          </el-form-item>
          <el-form-item label="截止时间" prop="ddl">
            <el-date-picker
              v-model="taskInfo.ddl"
              format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择截止时间"
            ></el-date-picker>
          </el-form-item>
          <!-- <el-form-item label="任务类型" prop="type">
            <el-radio-group v-model="taskInfo.type">
              <el-radio :label="0">文件类</el-radio>
              <el-radio :label="1">回复类</el-radio>
            </el-radio-group>
          </el-form-item>-->
          <el-form-item label="任务描述" prop="description">
            <Input
              v-model="taskInfo.description"
              type="textarea"
              placeholder="Enter something..."
              style="width: 300px"
            />
            <!-- <el-input v-model="taskInfo.description" type="textarea"></el-input> -->
          </el-form-item>
          <!-- <el-form-item label="分配任务人员" prop="description"> -->
          <!-- <el-form-item label="任务人员名" prop="fp_user">
            <Input
              v-model="taskInfo.fp.user"
              placeholder="Enter something..."
              style="width: 300px"
            />
          </el-form-item>
          <el-form-item label="电话" prop="fp_phone">
            <Input
              v-model="taskInfo.fp.phone"
              placeholder="Enter something..."
              style="width: 300px"
            /> -->
            <!-- </el-form-item> -->
          </el-form-item>
          <el-form-item>
            <Button type="primary" @click="modifyTaskInfo" v-if="taskInfo.id !=''">修改</Button>
            <Button type="primary" @click="submit" v-else>创建</Button>
            <!-- <el-button>取消</el-button -->
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { addTask } from "../../../api/api";
import { modifyTaskInfo } from "../../../api/api";
export default {
  data() {
    return {
      taskInfo: {
        id: "",
        name: "",
        ddl: "",
        description: "",
        type: "",
        isOpen: true,
      },
      // taskInfo = {
      //   name: "", //任务名称
      //   ddl: "", //截止时间
      //   description: "", //任务描述
      //   fp: {
      //     user: "", //任务人员名
      //     phone: "" //电话
      //   }
      // };
      rules: {
        name: [
          { required: true, message: "请输入任务名称", trigger: "blur" },
          { min: 1, max: 16, message: "长度在4到10之间", trigger: "blur" }
        ],
        ddl: [{ required: true, message: "请选择截止时间", trigger: "blur" }],
        description: [
          { required: true, message: "请输入任务描述", trigger: "blur" }
        ],
        type: [{ required: true, message: "请选择任务类型", trigger: "blur" }]
      }
    };
  },
  created() {
    if (this.$route.query.taskInfo != null) {
      if (this.$route.query.taskInfo.id != null) {
        this.taskInfo = this.$route.query.taskInfo;
      }
    }
  },
  methods: {
    submit() {
      this.$refs[this.taskInfo].validate(valid => {
        if (valid) {
          addTask(this.taskInfo).then(res => {
            console.log(res);
            this.$message({ type: "success", message: "添加成功!" });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          });
        } else {
          console.log("error submit");
        }
      });
    },
    modifyTaskInfo() {
      modifyTaskInfo(this.taskInfo)
        .then(() => {
          this.$message({ type: "success", message: "修改成功!" });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch(err => {
          this.$message({ type: "error", message: err.response.data.message });
        });
    }
  }
};
</script>

<style>
</style>
