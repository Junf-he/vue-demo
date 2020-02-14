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
        },
        clearCompleted:function(){
            var newArr = this.list;
            newArr.map(function(item,index){
                if(item.checked){
                    newArr.splice(index,1);
                }
            })
            this.list=newArr
        }
    }
})