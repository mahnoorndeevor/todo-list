let input=prompt("what would you like to do?");
const li=["walk dog", "cat food"];
while(input!=='quit' && input!=='q'){
    
    if(input==='list'){
        console.log("**************");
        for(let i=0; i<li.length; i++){
           
            console.log(`${i} : ${li[i]}`);
    
            


        
        }
        console.log("**************")
    }else if(input==="new"){
        const newTodo=prompt("ok whats new todo?");
        li.push(newTodo);
        console.log(`new todo ${newTodo} added to the list`);
        
    }else if(input==='delete'){
        const index=parseInt(prompt("what do you want to delete? enter index to delete!"));
        if(!Number.isNaN(index)){
       
            const deleted=li.splice(index, 1);

            console.log(`Ok, deleted ${deleted[0]}`);
    }else{
        console.log(`not an index or unknown value`)
        
        }
        


    }
    input=prompt("what would you like to do?");





}
console.log("quit the app");