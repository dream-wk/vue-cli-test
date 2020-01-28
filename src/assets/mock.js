const Mock = require("mockjs");
Mock.setup({ timeout: 800 });
Mock.mock("/public/login", "post", function(req) {
  if (Mock.mock("@boolean(1,3,false")) {
    alert("mock测试");
    return {
      req: req,
      state: 1,
      result: "success"
    };
  } else {
    return {
      req: req,
      state: 0,
      result: "密码错误"
    };
  }
});
