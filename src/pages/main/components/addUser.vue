<template>
  <div>
    <el-row>
      <el-col :lg="12" :offset="4" style="text-align:center">
        <H2 v-if="userInfo.aid!=null">修改用户信息</H2>
        <h2 v-else>创建新用户</h2>
        <el-form :model="userInfo" :rules="rules" :ref="userInfo" label-width="100px">
          <el-form-item label="用户名" prop="name">
            <!-- <el-input v-model="userInfo.name"></el-input> -->
            <Input v-model="userInfo.name" placeholder="Enter something..." style="width: 300px"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <Input
              v-model="userInfo.password"
              type="password"
              placeholder="Enter something..."
              style="width: 300px"
            />
          </el-form-item>
          <el-form-item label="手机号">
            <Input v-model="userInfo.phone" placeholder="Enter something..." style="width: 300px"/>
          </el-form-item>
          <el-form-item label="职位级别" prop="role">
            <!-- <el-radio-group v-model="userInfo.role">
              <el-radio :label="0">讲师</el-radio>
              <el-radio :label="1">副教授</el-radio>
              <el-radio :label="2">教授</el-radio>
            </el-radio-group>-->
            <RadioGroup v-model="userInfo.role">
              <Radio :label="2">
                <Icon type="social-apple"></Icon>
                <span>教授级别</span>
              </Radio>
              <Radio :label="1">
                <Icon type="social-android"></Icon>
                <span>副教授级别</span>
              </Radio>
              <Radio :label="0">
                <Icon type="social-windows"></Icon>
                <span>讲师级别</span>
              </Radio>
            </RadioGroup>
          </el-form-item>
          <el-form-item>
            <Button type="primary" @click="modifyUserInfo" v-if="userInfo.aid!=null">立即修改</Button>
            <Button type="primary" @click="submit" v-else>立即创建</Button>
            <!-- <el-button>取消</el-button> -->
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { addUser } from "../../../api/api";
import { modifyUserInfo } from "../../../api/api";
export default {
  data() {
    return {
      userInfo: {
        name: "",
        phone: "",
        password: "",
        role: 1
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4到10之间", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入电话号", trigger: "blur" },
          { min: 11, max: 11, message: "请确认手机号格式", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 16, message: "长度在8到16之间", trigger: "blur" }
        ],
        role: [{ required: true, message: "请选择职称", trigger: "blur" }]
      }
    };
  },
  created() {
    if (this.$route.query.userInfo != null)
      if (this.$route.query.userInfo.aid != null)
        this.userInfo = this.$route.query.userInfo;
    this.$forceUpdate();
  },
  methods: {
    submit() {
      this.$refs[this.userInfo].validate(valid => {
        if (valid) {
          addUser(this.userInfo)
            .then(res => {
              if (res.name == this.userInfo.name)
                this.$message({ type: "success", message: "添加成功!" });
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            })
            .catch(err => {
              this.$message({
                type: "error",
                message: err.response.data.message
              });
            });
        } else {
          console.log("err submit");
        }
      });
    },
    modifyUserInfo() {
      this.$refs[this.userInfo].validate(valid => {
        if (valid) {
          modifyUserInfo(this.userInfo)
            .then(res => {
              this.$message({
                type: "success",
                message: `用户:${res.name} 信息修改成功!`
              });
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            })
            .catch(err => {
              this.$message({
                type: "error",
                message: err.response.data.message
              });
            });
        } else {
          console.log("error submit");
        }
      });
    }
  }
};

</script>
<style>
</style>
