<template>
  <div>
    <!-- <el-row class="tac">
      <el-col>
        <h5>默认颜色</h5>
        <el-menu default-active="2">
          <div v-if="$store.state.userInfo.aid!=0">
            <el-submenu name="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item name="1-1" @click.native="addUser">新增用户</el-menu-item>
                <el-menu-item name="1-2" @click.native="listUsers">列出所有用户</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu name="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>考试信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item name="2-1" @click.native="addIvg">新增考试信息</el-menu-item>
                <el-menu-item name="2-2" @click.native="listIvgs">列出所有考试</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu name="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>监考分配管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item name="3-1" @click.native="setUserIvg">分配监考</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu name="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>任务信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item name="4-1" @click.native="addTask">新增任务信息</el-menu-item>
                <el-menu-item name="4-2" @click.native="listTasks">列出所有任务</el-menu-item>
                <el-menu-item name="4-3">查看用户完成情况</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
          <el-submenu name="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>个人信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item name="5-1" @click.native="modifyMyInfo">修改个人信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu name="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>监考信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item name="6-1" @click.native="checkMyIvgInfo">查看我的监考信息</el-menu-item>
              <el-menu-item name="6-2" @click.native="setUserIvg">查看所有监考信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu name="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>任务信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item name="7-1" @click.native="listTasks">查看任务信息</el-menu-item>
              <el-menu-item name="6-2" @click.native="checkIsSubmitedTasks">查看完成情况</el-menu-item>
              <el-menu-item name="6-2" @click.native="checkOtherSubmitedTasks">查看他人完成情况</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>-->
    <Layout :style="{width:'100%'}">
      <Header>
        <h1
          style="width:400px;color:white;position:relative;left:50%;margin-left:-200px;"
        >Examination Management System</h1>
        <Menu
          :style="{position:'relative',left:'50%',transform:'translateX(-50%)',width:'100%',position:'fixed',top:'100px',zIndex:'1'}"
          theme="dark"
          mode="horizontal"
          active-name="1"
        >
          <div v-if="$store.state.userInfo.aid!=0">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper"/>用户信息管理
              </template>
              <MenuGroup title="用户信息管理">
                <MenuItem name="1-1" @click.native="addUser">新增用户</MenuItem>
                <MenuItem name="1-2" @click.native="listUsers">列出所有用户</MenuItem>
              </MenuGroup>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>考试信息管理</span>
              </template>
              <MenuGroup title="考试信息管理">
                <MenuItem name="2-1" @click.native="addIvg">新增考试信息</MenuItem>
                <MenuItem name="2-2" @click.native="listIvgs">列出所有考试</MenuItem>
              </MenuGroup>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>监考分配管理</span>
              </template>
              <MenuGroup title="监考分配管理">
                <MenuItem name="3-1" @click.native="setUserIvg">分配监考</MenuItem>
              </MenuGroup>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>任务信息管理</span>
              </template>
              <MenuGroup title="任务信息管理">
                <MenuItem name="4-1" @click.native="addTask">新增任务信息</MenuItem>
                <MenuItem name="4-2" @click.native="listTasks">列出所有任务</MenuItem>
                <!-- <MenuItem name="4-3">查看用户完成情况</MenuItem> -->
              </MenuGroup>
            </Submenu>
          </div>
          <Submenu name="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>个人信息管理</span>
            </template>
            <MenuGroup title="个人信息管理">
              <MenuItem name="5-1" @click.native="modifyMyInfo">修改个人信息</MenuItem>
            </MenuGroup>
          </Submenu>
          <Submenu name="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>监考信息管理</span>
            </template>
            <MenuGroup title="监考信息管理">
              <MenuItem name="6-1" @click.native="checkMyIvgInfo">查看我的监考信息</MenuItem>
              <MenuItem name="6-2" @click.native="setUserIvg">查看所有监考信息</MenuItem>
            </MenuGroup>
          </Submenu>
          <Submenu name="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>任务信息管理</span>
            </template>
            <MenuGroup title="任务信息管理">
              <MenuItem name="7-1" @click.native="listTasks">查看任务信息</MenuItem>
              <MenuItem name="6-2" @click.native="checkIsSubmitedTasks">查看完成情况</MenuItem>
              <MenuItem name="6-2" @click.native="checkOtherSubmitedTasks">查看他人完成情况</MenuItem>
            </MenuGroup>
          </Submenu>
          <MenuItem @click.native="handleCommand('logout')" name="8">
            <i class="el-icon-location"></i>
            <span class="el-dropdown-link">
              注销
              <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
            </span>
          </MenuItem>
          <!-- <div style="display:fixed;right:16px;height:100px;">
            <el-dropdown class="dropdown" :style="{color:'white'}" @command="handleCommand">
              <span class="el-dropdown-link">
                {{$store.state.userInfo.name}}:个人相关
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">修改个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>-->
        </Menu>
      </Header>
    </Layout>
  </div>
</template>
<script>
export default {
  methods: {
    addUser() {
      this.$router.push("/addUser");
    },
    listUsers() {
      this.$router.push("/listUsers");
    },
    addIvg() {
      this.$router.push("/addIvg");
    },
    listIvgs() {
      this.$router.push("/listIvgs");
    },
    setUserIvg() {
      this.$router.push("/setUserIvg");
    },
    addTask() {
      this.$router.push("/addTask");
    },
    listTasks() {
      this.$router.push("/listTasks");
    },
    modifyMyInfo() {
      this.$router.push("/modifyMyInfo");
    },
    checkMyIvgInfo() {
      this.$router.push("/checkMyIvgInfo");
    },
    checkIsSubmitedTasks() {
      this.$router.push("/checkIsSubmitedTasks");
    },
    checkOtherSubmitedTasks() {
      this.$router.push("/checkOtherSubmitedTasks");
    },
    handleCommand(command) {
      switch (command) {
        case "logout":
          this.$store.commit("logout");
          window.location.href = "./login.html";
          break;
        case "a":
          this.modifyMyInfo();
      }
    }
  }
};
</script>
<style>
</style>
