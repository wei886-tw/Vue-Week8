const n={methods:{loadingCircle(){let e=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!0,onCancel:this.onCancel});setTimeout(()=>{e.hide()},500)}}};export{n as m};