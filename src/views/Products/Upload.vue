<template>
    <div class="w-full mx-auto">
        <div class="container mx-auto">
            <div class="upload shadow-sm rounded-md mx-auto p-5 my-24">
                <form action="" method="post" class="my-5 px-10 mx-auto w-full" v-on:submit.prevent="upload">
                    <h1 class="text-left font-headers text-md my-5">Post New Ad</h1>
                    <div class="flex w-full place-content-between mb-8">
                        <div class="text-left flex flex-col">
                            <label for="name" class="text-left text-xs">Name</label>
                            <input id="name" class="w-full rounded outline-none" placeholder="Product Name" type="text" v-model="form.name">
                        </div>
                        <div class="text-left flex flex-col">
                            <label for="name" class="text-left text-xs">Category</label>
                            <select class="w-full rounded outline-none" v-model="form.category">
                                <option value="">Select a Category</option>
                                <option name="" id="" v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                            </select>
                            <!-- <input id="name" class="w-full rounded outline-none" placeholder="Product Name" type="text"> -->
                        </div>
                    </div>
                    <div class="flex w-full place-content-between mb-8">
                        <div class="text-left flex flex-col">
                            <label for="name" class="text-left text-xs">Part Number</label>
                            <input id="name" class="w-full rounded outline-none" placeholder="Product Name" type="text">
                        </div>
                        <div class="text-left flex flex-col">
                            <label for="name" class="text-left text-xs">Brand</label>
                            <select class="w-full rounded outline-none" v-model="form.brand" required>
                                <option value="">Select a brand</option>
                                <option name="" id="" v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.name }}</option>
                            </select>
                        </div>
                    </div>
                    <input id="name" class="w-full rounded outline-none flex flex-start mb-8" placeholder="Price" type="text" v-model="form.price">

                    <p class="info text-left">Add Photo</p>
                    <p class="sub_info text-left">
                        Add up to 5 photos of your product. The first photo will be the main photo.
                    </p>
                    <div class="file-upload flex flex-row my-5">
                        <label class="flex image-reader bg-secondary-dark place-content-center p-5" for="" v-on:click="readfile">
                            <font-awesome-icon class="text-lg m-auto flex text-center text-grey-light" :icon="['fa', 'fa-add']" />
                            <input type="file" @change="uploadFile" id="file" ref="file"  size="0" multiple>
                        </label>
                        <!-- render images -->
                        <div v-for="img in form.images" :key="img.id" class="selected_img">
                            <!-- close img -->
                            <div class="close_img relative cursor-pointer" @click="removeImage(img.id)">
                                <div class="discard absolute bg-secondary-dark p-1 rounded-full">
                                    <font-awesome-icon class="text-xs m-auto flex text-grey-light relative" :icon="['fa', 'fa-times']" />
                                </div>
                            </div>
                            <img :src="img" alt="" class="image">
                        </div>
                    </div>
                    <p class="sub_info text-left mt-3">
                        Product picture must not exceed 3 Mb
                        Supported formats are *.jpg and *.png 
                    </p>
                    <p class="err text-left" v-if="err && form.images.length > 0">{{ err }}</p>
                    <div class="upload-btn w-full">
                        <button class="btn btn-primary bg-info" type="submit" name="action">Upload Product</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { getAPI } from "@/utils/apis/axios";

export default {
    name: 'ProductUpload',
    components: {
    },
    data(){
        return{
            brands: this.$store.state.products.brands,
            categories: this.$store.state.products.categories,
            url: '',
            id: 1,
            label: 'Upload Product Image',
            err: '',
            form: {
                name: '',
                category: '',
                part_number: '',
                brand: '',
                images: [],
                price: '',
                description: ''
            }
        }
    },
    methods: {
        uploadFile(){
            let files = this.$refs.file.files;
            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (files[i].size < 3000000 && files[i].type == 'image/jpeg') {
                        this.form.images.push(e.target.result);
                    } else {
                        this.err = 'File size must not exceed 2mb and must be a jpeg file';
                    }
                };
                reader.readAsDataURL(files[i]);
            }
        },

        readfile(){
            let file_btn = document.getElementById('file')
            file_btn.click();
        },

        removeImage(id){
            this.images.splice(id, 1);
        },

        upload(){
            getAPI.post('api/products/upload/', this.form).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
.upload{
    background: #fff;
    width: 900px;
}

label{
    margin-bottom: 5px;
}

input, select{
    height: 52px;
    border: 1px solid #cecece;
    padding: 5px 12px;
    width: 350px;
    background: #fff;
}

/* custom file input btn */
input[type="file"] {
    display: none;
}

.image-reader{
    border: 1px solid #ccc;
    display: inline-block;
    /* padding: 6px 12px; */
    cursor: pointer;
    width: 82px;
    height: 82px;
    border-radius: 50px;
}

.selected_img{
    width: 82px;
    height: 82px !important;
    border-radius: 50px;
    margin-left: 10px;
}

.image{
    width: 100%;
    height: 100%;
}

.discard{
    width: 20px;
    height: 20px;
    right: -5px;
}

.sub_info{
    font-size: 10px;
    color: #666;
}

.err{
    color: red;
    font-size: 10px;
    margin-bottom: 10px;
}

.upload-btn{
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
}

.upload-btn button{
    width: 150px;
    height: 40px;
}
</style>