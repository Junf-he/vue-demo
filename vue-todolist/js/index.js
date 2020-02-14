var vm = new Vue({
    el:'.wrapper',
    data:{
        inputValue:"123",
        list:[]
    },
    methods:{
        addValue:function(){
            this.list.push(
                {
                    title:this.inputValue,
                    checked:false
                }
            )
            this.inputValue="";
        },
        deleteValue:function(item){
            var index = this.list.indexOf(item);
            this.list.splice(index,1);
        }
    }
})