<template>
    <div class="w-full mx-auto">
        <div class="container mx-auto">
            <div class="upload shadow-sm rounded-md mx-auto p-5 my-24">
                <form action="" method="post" class="my-8 px-10 mx-auto w-full" v-on:submit.prevent="upload">
                    <div class="header flex place-content-between mb-8">
                        <div class="header-info flex my-auto">
                            <h1 class="text-left font-headers text-md">Post New Ad - </h1>
                            <span v-if="current_step === 1" class="text-grey-light font-bold text-xs ml-2">(About Product)</span>
                            <span v-else class="text-grey-light font-bold text-xs ml-2">(Product Details)</span>
                        </div>
                        <div class="my-auto">
                            <button v-if="current_step === 2" class="btn btn-secondary prev-btn" @click="prevStep">
                                <font-awesome-icon :icon="['fa', 'fa-arrow-left']" class="text-sm m-auto flex text-center text-black" />
                            </button>
                        </div>
                    </div>
                        

                    <div v-if="current_step === 1">
                        <div class="flex w-full place-content-between mb-8">
                            <div class="text-left flex flex-col">
                                <label for="name" class="text-left text-xs">Name</label>
                                <input id="name" class="w-full rounded outline-none" placeholder="Product Name" type="text" v-model="form.name">
                            </div>
                            <div class="text-left flex flex-col">
                                <label for="name" class="text-left text-xs">Category</label>
                                <div class="cselect">
                                    <select class="w-full rounded outline-none" v-model="form.category">
                                        <option value="">Select a Category</option>
                                        <option name="" id="" v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="flex w-full place-content-between mb-8">
                            <div class="text-left flex flex-col">
                                <label for="name" class="text-left text-xs">Part Number</label>
                                <input id="name" v-model="form.part_number" class="w-full rounded outline-none" placeholder="Part Number" type="text">
                            </div>
                            <div class="text-left flex flex-col">
                                <label for="name" class="text-left text-xs">Make</label>
                                <div class="cselect">
                                    <select class="w-full rounded outline-none" v-model="form.brand" required>
                                        <option value="">Select Vehicle Make</option>
                                        <option name="" id="" v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.name }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="w-full text-left">
                            <label for="price">Price <span class="font-bold text-xs text-grey-light"> (GH₵)</span></label>
                        </div>
                        <input id="price" class="w-full rounded outline-none flex flex-start mb-2" placeholder="Price" type="text" v-model="form.price">
                        <div class="w-full text-left mb-8">
                            <input type="checkbox" name="negotiable" id="neg">
                            <label for="neg" class="ml-3">Negotiable</label>
                        </div>

                        <p class="info text-left">Add Photo</p>
                        <p class="sub_info text-left">
                            Add up to 5 photos of your product. The first photo will be the main photo.
                        </p>

                        <div class="file-upload flex flex-row my-5">
                            <label class="flex image-reader bg-secondary-light place-content-center p-5" for="" v-on:click="readfile">
                                <font-awesome-icon class="text-lg m-auto flex text-center text-white" :icon="['fa', 'fa-add']" />
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

                        <div class="next_btn w-full mt-10 flex content-start">
                            <button class="btn btn-primary bg-info" v-on:click="nextStep">Next</button>
                        </div>
                    </div>

                    <div v-if="current_step === 2">
                        <div class="flex w-full place-content-between mb-8">
                            <div class="text-left flex flex-col">
                                <label for="subtype" class="text-left text-xs">Subtype</label>
                                <input id="subtype" class="w-full rounded outline-none" placeholder="Select Part" type="text">
                            </div>
                            <div class="text-left flex flex-col">
                                <label for="condition" class="text-left text-xs">Condition</label>
                                <select class="w-full rounded outline-none" v-model="form.condition" required>
                                    <option value="">Select Product Condition</option>
                                    <option value="">Brand New</option>
                                    <option value="">Used</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full text-left">
                            <label for="desc" class="text-xs w-full">Description</label>
                        </div>
                        <textarea v-model="form.description" name="desc" class="w-full rounded outline-none mb-2" id="" maxlength="1000" required></textarea>
                        
                        <div class="flex w-full place-content-between mb-8">
                            <div class="text-left flex flex-col">
                                <label for="model" class="text-left text-xs">Model</label>
                                <input id="model" class="w-full rounded outline-none" placeholder="Choose Model" type="text">
                            </div>
                            <div class="text-left flex flex-col">
                                <label for="year" class="text-left text-xs">Year</label>
                                <input id="year" v-model="form.year" class="w-full rounded outline-none" placeholder="Select Vehicle Year" type="text">
                            </div>
                        </div>

                        <div class="disabled-inputs">
                            <div class="flex w-full place-content-between mb-8">
                                <div class="text-left flex flex-col">
                                    <label for="name" class="text-left text-xs">Name</label>
                                    <input id="name" class="w-full rounded outline-none cursor-not-allowed capitalize" placeholder="Select Part" type="text" v-model="vendor_name" disabled>
                                </div>
                                <div class="text-left flex flex-col">
                                    <label for="contact" class="text-left text-xs">Contact</label>
                                    <input id="contact" class="w-full rounded outline-none cursor-not-allowed" placeholder="Select Part" type="text" v-model="vendor.email" disabled>
                                </div>
                            </div>
                        </div>

                        <div class="upload-btn w-full mt-10">
                            <button class="btn btn-primary bg-info" type="submit" name="action">Upload Product</button>
                        </div>
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
            vendor: '',
            vendor_name: '',
            form: {
                name: '',
                category: '',
                part_number: '',
                brand: '',
                images: [],
                price: '',
                description: '',
                year: '',
                condition: '',
            },
            current_step: 1,
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
            this.form.images.splice(id, 1);
        },

        upload(){
            getAPI.post('api/products/upload/', this.form, { 
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err);
            })
        },

        nextStep(){
            this.current_step = 2;
        },

        prevStep(){
            this.current_step = 1;
        }
    },
    watch:{
        // remove upload func if images is upto 5
        // image:function(){
        //     if(this.form.images.length == 5){

        //     }
        // }
        
    },
    mounted(){
        // if localstorage contains access and refresh token
        if(localStorage.getItem('access_token') && localStorage.getItem('refresh_token')){
                this.vendor_name = res.data.first_name + ' ' + res.data.last_name;
                this.$store.state.user.user_info ? this.vendor = this.$store.state.user.user_info : this.vendor = '';
        } else {
            this.$router.push({ name: "Home" });
            this.$notification.error("Please Login to start selling.", { infiniteTimer: false, showCloseIcn: true });
        }
    }
}
</script>

<style scoped>
.prev-btn{
    background-color: #F2F2F2;
    color: #000;
    border-radius: 5px;
    /* padding: 20px; */
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

.upload{
    background: #fff;
    width: 850px;
}

textarea{
    height: 128px;
    padding: 10px 14px 5px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #303a4b;
    border: 1px solid #cecece;
}

label{
    margin-bottom: 5px;
}

input[type="text"], select{
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

.header-info{
    align-items: baseline;
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

.upload-btn button, .next_btn button{
    width: 250px;
    height: 40px;
}
</style>