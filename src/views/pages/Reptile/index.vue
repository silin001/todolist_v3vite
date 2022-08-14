<template>
  <div class="reptileBox">
    <p>https简单爬虫测试</p>
    <p>示例：豆瓣top250， https://movie.douban.com/top250</p>
    <p>
      示例：知乎排行榜 .Card .HotList-item HotList-itemTitle HotList-itemMetrics
      https://www.zhihu.com/billboard
    </p>
    <div class="w-1-1">
      <el-input
        type="text"
        placeholder="请输入网址"
        v-model="keyVal"
      ></el-input>
      <!-- @keyup.enter="handlerKeyup" -->
      <br />
      <el-form
        ref="ruleFormRef"
        :model="dynamicValidateForm"
        label-width="120px"
        class="demo-dynamic"
      >
        <el-form-item
          v-for="(item, index) in dynamicValidateForm.fieldList"
          :key="item.id"
          :label="index === 0 ? '父级选择器' : '字段' + index"
          :prop="'fieldList.' + index + '.value'"
          :rules="rules"
        >
          <el-row class="full" :gutter="10">
            <el-col :span="15">
              <el-input
                :placeholder="
                  index === 0
                    ? '请输入父级容器id或class名称'
                    : '请输入id或class名称'
                "
                v-model="item.value"
              ></el-input>
            </el-col>
            <el-col :span="4" v-if="dynamicValidateForm.fieldList.length > 1">
              <el-button type="danger" @click="deleteHandler(item, index)"
                >X</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button @click="addHandler">添加字段</el-button>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >Submit</el-button
          >

          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>

    <br />
    <ul>
      <h4>数据列表展示：</h4>
      <div v-for="item in state.list" :key="item.id">
        <div class="flex">
          <img
            v-if="item.img"
            width="100"
            height="100"
            :src="item.img"
            alt=""
          />
          <div>
            <div>{{ item.title }}</div>
            <div>{{ item.rating_num }}</div>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { post } from "../../../http/axios";
import type { ElForm } from "element-plus";
type FormInstance = InstanceType<typeof ElForm>;
const ruleFormRef = ref<FormInstance>();

onMounted(() => {});
// 用于 dynamicValidateForm.fieldList 的接口 首字母大写
interface FieldItem {
  id: number;
  value: string;
}
// 校验
const rules = reactive({
  required: true,
  message: "字段不得为空！",
  trigger: "blur",
});
// 动态表单
const dynamicValidateForm = reactive<{
  fieldList: FieldItem[];
}>({
  fieldList: [
    {
      // id: 1,
      value: "li .item",
    },
    {
      id: 2,
      value: "title",
    },
  ],
});

const addHandler = () => {
  const { fieldList } = dynamicValidateForm;
  if (fieldList.length >= 5) {
    ElMessage.warning("字段不得超过5个！");
    return;
  }
  fieldList.push({
    id: Date.now(),
    value: "",
  });
};
const deleteHandler = (item, index) => {
  const { fieldList } = dynamicValidateForm;
  if (fieldList.length <= 1) {
    //如果只有一个输入框则不可以删除
    return false;
  }
  fieldList.splice(index, 1); //删除了数组中对应的数据也就将这个位置的输入框删除
};

const submitForm = (formEl: FormInstance | undefined) => {
  const modelUrl = keyVal.value;
  if (modelUrl) {
    const isUrl = isUrlFun(modelUrl);
    if (isUrl) {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log("submit!");
          const {
            model: { fieldList },
          } = formEl;
          if (fieldList.length >= 2) {
            const resList = fieldList.map((item) => item.value);
            const params = {
              url: modelUrl,
              list: resList,
            };
            post("/myApi/reptile", params).then((res) => {
              if (res.code == 200) {
                console.log(res.list);
                state.list = res.list;
              }
            });
          } else {
            ElMessage.error("最少需要两个字段！");
          }
        } else {
          ElMessage.error("error submit!");
          return false;
        }
      });
    }
    // keyVal.value = ''
  } else {
    ElMessage.error("网站不得为空！");
  }
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

// 其他。。。。
const state = reactive({
  list: [],
});

const keyVal = ref("https://movie.douban.com/top250");

// const handlerKeyup = () => {
//   if (keyVal.value) {
//     isUrlFun(keyVal.value)
//     keyVal.value = ''
//   } else {
//     ElMessage.error('网站不得为空！')
//   }
// }
const isUrlFun = (urlStr) => {
  const expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
  const objExp = new RegExp(expression);
  // console.log(objExp.test(str))
  if (objExp.test(urlStr)) {
    return true;
  } else {
    ElMessage.error("请输入http、https开头的网站！");
    return false;
  }
};
</script>
<style scoped lang="less"></style>
