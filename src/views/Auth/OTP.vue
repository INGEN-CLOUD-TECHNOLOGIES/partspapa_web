<template>
    <div class="">
        <div class="flex w-full">
        <div class="left-panel hidden md:block relative">
            <!-- <div class="cta-info">
            this is a test
            </div> -->
            <div class="img_overlay"></div>
            <img src="@/assets/img/hero2.png" class="res-img w-full" alt="" />
        </div>
        <div class="w-full flex place-content-center m-auto p-[65px]">
            <div class="form text-left w-[500]">
            <p class="info text-grey text-base">Hello There! 👋</p>
            <h1 class="font-bold mb-8 text-md">Please enter the One-Time Password to verify your account</h1>
            <form @submit.prevent="sendOTP" class="my-10">
                <div class="form-group flex flex-col">
                    <!-- <label for="password" class="font-semibold mb-1">Password:</label> -->
                    <!-- form group -->
                    <div class="flex flex-col">
                        <div class="flex">
                        <input
                            type="text"
                            class="form-control w-1/6 mr-2"
                            v-model="code1"
                            maxlength="1"
                            v-on:keyup="focusNextInput"
                        />
                        <input
                            type="text"
                            class="form-control w-1/6 mr-2"
                            v-model="code2"
                            maxlength="1"
                            v-on:keyup="focusNextInput"
                        />
                        <input
                            type="text"
                            class="form-control w-1/6 mr-2"
                            v-model="code3"
                            maxlength="1"
                            v-on:keyup="focusNextInput"
                        />
                        <input
                            type="text"
                            class="form-control w-1/6 mr-2"
                            v-model="code4"
                            maxlength="1"
                            v-on:keyup="focusNextInput"
                        />
                        <input
                            type="text"
                            class="form-control w-1/6 mr-2"
                            v-model="code5"
                            maxlength="1"
                            v-on:keyup="focusNextInput"
                        />
                        <input
                            type="text"
                            class="form-control w-1/6"
                            v-model="code6"
                            maxlength="1"
                            v-on:keyup="focusNextInput"
                        />
                        </div>
                    </div>
                    <button
                    type="submit"
                    class="btn bg-secondary w-full text-white font-bold"
                    >
                    Validate
                    </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { getAPI } from "@/utils/apis/axios";
// @ is an alias to /src=
export default {
name: "Home",
    data() {
        return {
            img_id: 1,
            email: '',
            otp: '',
            code1: '',
            code2: '',
            code3: '',
            code4: '',
            code5: '',
            code6: '',
        };
    },
    methods: {
        // generate random numbers 1 to 3 every 10 seconds
        randomNumber() {
        this.img_id = Math.floor(Math.random() * 2) + 1;
        },

        // trigger random number evry 10 seconds recursively
        randomNumberInterval() {
            setInterval(() => {
                this.randomNumber();
            }, 10000);
        },

        // focus on next input
        focusNextInput($event) {
            let keyCode = $event.keyCode ? $event.keyCode : $event.which;
            if (!(keyCode < 48 || keyCode > 57) && keyCode !== 46) {
                // 46 is dot
                try {
                    this.otp = this.code1 + this.code2 + this.code3 + this.code4 + this.code5 + this.code6;
                    $event.target.nextElementSibling.focus();
                } catch {
                // do nothing
                }
            } else if (keyCode > 95 && keyCode < 106) {
                // 46 is dot
                try {
                    // add value to otp
                    this.otp = this.code1 + this.code2 + this.code3 + this.code4 + this.code5 + this.code6;
                    $event.target.nextElementSibling.focus();
                } catch {
                // do nothing
                }
            } else if (keyCode == 8 || keyCode == 37) {
                // 46 is dot
                try {
                    // add value to otp
                    this.otp = this.code1 + this.code2 + this.code3 + this.code4 + this.code5 + this.code6;
                    $event.target.previousElementSibling.focus();
                } catch {
                // do nothing
                }
            } else if (keyCode == 39) {
                // 46 is dot
                try {
                    // add value to otp
                    this.otp = this.code1 + this.code2 + this.code3 + this.code4 + this.code5 + this.code6;
                    $event.target.nextElementSibling.focus();
                } catch {
                    // do nothing
                }
            } else {
                $event.target.value = "";
            }
        },

        sendOTP(){
            // combine codes#
            this.otp = this.code1 + this.code2 + this.code3 + this.code4 + this.code5 + this.code6;
            // if otp is less than 6 digits
            if(this.otp.length < 6){
                // show error message
                this.$notification.dark(
                    "OTP is incorrect. Enter all 6 digits OTP.",
                    {
                        title: "Error",
                        background: "green",
                        color: "white",
                    }
                );
            }else{
                // send otp to server
                getAPI.post('api/users/otp/', {email: this.email, otp: this.otp}).then((response) => {
                    // console.log(response.data);
                    if(response.data.message == 'OTP verified'){
                        // redirect to dashboard
                        this.$router.push({ name: 'Login' });
                    }else{
                        // show error message
                        alert(response.data.message)
                        this.$notification.error(
                            "OTP is incorrect. Please try again.",
                            {
                                title: "Error",
                                background: "green",
                                color: "white",
                            }
                        );
                    }
                }).catch((error) => {
                    // show error message
                    this.$notification.dark(
                        "OTP is incorrect. Please try again.",
                        {
                            title: "Error",
                            background: "green",
                            color: "white",
                        }
                    );
                });
            }
        },
    },
    watch: {
        // watch otp
        otp: function (val) {
            if(val.length == 6){
                this.sendOTP();
            }
        },
    },
    mounted() {
        this.randomNumberInterval();
        // get registered email from vuex  
        this.email = this.$store.state.user.registeredEmail;
    },
};
</script>

<style scoped>
input{
    text-align: center;
}

.cta-info {
position: absolute;
width: 500px;
height: 200px;
left: 50%;
top: 75%;
transform: translate(-50%, -50%);

background: rgba(255, 242, 242, 0.3);
mix-blend-mode: normal;
backdrop-filter: blur(100px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 10px;
z-index: 10;
}

.img_overlay {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
}

.left-panel {
width: 100%;
}
.res-img {
width: 100%;
height: 100vh;
}

.form {
width: 420px;
}

.form-group input {
border: 1px solid #d8d8d8;
border-radius: 5px;
padding: 10px;
margin-bottom: 30px;
gap: 12px;
}

.line {
width: 100%;
height: 1px;
background-color: #d8d8d8;
margin: 30px 0;
}

button {
border-radius: 5px;
padding: 10px;
margin-bottom: 20px;
margin-top: 10px;
}

.option {
position: absolute;
left: 50%;
transform: translateX(-50%);
top: -13px;
background-color: #fff;
width: 40px;
}

.btn {
cursor: pointer;
}

.g-btn {
box-shadow: 0px 3px 9px 2px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0px 3px 9px 2px rgba(0, 0, 0, 0.1);
-moz-box-shadow: 0px 3px 9px 2px rgba(0, 0, 0, 0.1);
}
</style>
