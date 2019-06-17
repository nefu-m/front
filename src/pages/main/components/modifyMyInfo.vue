<template>
  <div>
    <el-row>
      <el-col :lg="12" :offset="4" style="text-align:center">
        <H2>修改我的信息</H2>
        <el-form :model="userInfo" :rules="rules" :ref="userInfo" label-width="100px">
          <el-form-item label="用户名" prop="name">
            <!-- <el-input v-model="userInfo.name"></el-input> -->
                        <Input
              v-model="userInfo.name"
              placeholder="Enter something..."
              style="width: 300px"
            ></Input>
          </el-form-item>
          <el-form-item label="个人简介">
            <Input
              v-model="userInfo.description"
              type="textarea"
              placeholder="Enter something..."
              style="width: 300px"
            ></Input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
                                    <Input
              v-model="userInfo.password"
              placeholder="Enter something..."
              style="width: 300px"
              type="password"
            ></Input>
          </el-form-item>
          <el-form-item>
            <Button type="primary" @click="submit">修改</Button>
            <!-- <el-button>取消</el-button> -->
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { modifyMyInfo } from "../../../api/api";
import { getMyInfo } from "../../../api/api";
export default {
  data() {
    return {
      userInfo: {
        id: "",
        name: "",
        phone: "",
        password: "",
        description: ""
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
        ]
      }
    };
  },
  created() {
    getMyInfo().then(res => {
      this.userInfo = res;
      //   this.$forceUpdate();
    });
  },
  methods: {
    submit() {
      this.$refs[this.userInfo].validate(valid => {
        if (valid) {
          modifyMyInfo(this.userInfo)
            .then(res => {
              if (res.name == this.userInfo.name)
                this.$message({ type: "success", message: "修改成功!" });
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
    }
  }
};
</script>
<style>
</style>
