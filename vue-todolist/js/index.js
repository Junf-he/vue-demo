var list = JSON.parse(localStorage.getItem("items")) || []
var vm = new Vue({
    el:'.wrapper',
    watch:{
        list:{
            deep:true,
            handler:function(){
                localStorage.setItem("items",JSON.stringify(this.list))
            }
        }
    },
    data:{
        inputValue:"",
        list:list,
        listItems:[]
    },
    computed:{
        count(){
            return this.list.filter(function(item){return !item.checked}).length
        }
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
        filterItems:function(status){
            if(status==2){
                this.listItems=this.list.filter(function(item){return !item.checked})
            }else if(status==3){
                this.listItems=this.list.filter(function(item){return item.checked})
            }else{
                this.listItems=this.list
            }
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
    vm.filterItems(1);