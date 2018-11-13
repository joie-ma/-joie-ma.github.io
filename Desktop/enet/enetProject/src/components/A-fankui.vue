<template>
    <!-- 关于我们：反馈建议 -->
    <div>
        <div class="about-div">
            <h3>反馈建议</h3>
            <p>非常感谢您对华为云的关注，欢迎提出宝贵的意见和建议，我们将积极采纳，更好的改善我们的服务。</p>
        </div>
        <hr>
        <div class="about-div about-con">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="反馈类型" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="投诉建议"></el-radio>
                        <el-radio label="产品报障"></el-radio>
                        <el-radio label="售前咨询"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="反馈内容" prop="desc">
                    <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 4}" v-model="ruleForm.desc" placeholder="请具体描述一下您要反馈的内容，字数保持在300字以内"></el-input>
                </el-form-item>
                <el-form-item label="上传图片" prop="imgfile">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="5"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                      <i class="el-icon-circle-plus">选择图片</i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="联系方式" prop="contact">
                    <el-input v-model="ruleForm.contact" placeholder="留下您的邮箱或电话方便我们及时联系您"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="about-btn" type="primary" @click="submitForm('ruleForm')">提&nbsp;&nbsp;&nbsp;交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Afankui',
    data() {
        return {
            fileList: [
                {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
            ],
            ruleForm: {
                resource: '',
                desc: '',
                contact: '',
                imgfile: ''
            },
            rules: {
                resource: [
                    { required: true, message: '请选择反馈类型', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请具体描述一下您要反馈的内容，字数保持在300字以内', trigger: 'change' }
                ],
                contact: [
                    { message: '留下您的邮箱或电话方便我们及时联系您', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3{
        line-height: 1;
        color: #313131;
        font-size: 20px;
    }
    p{
        color: #666;
        font-size: 16px;
        line-height: 24px;
        text-align: justify;
        margin: 0 0 8px;
    }
    .about-div{
        padding: 20px 45px 0 27px;
    }
    hr{
        height: 1px;
        width: 100%;
        background: #e9ecf1;
        margin:15px 0;
    }
    .about-con{
        margin-bottom: 55px;
    }
    .el-button.about-btn{
        color: #fff;
        font-size: 18px;
        padding: 13px 65px;
        border-radius: 0;
        display: block;
        margin: 0 auto;
    }
</style>
