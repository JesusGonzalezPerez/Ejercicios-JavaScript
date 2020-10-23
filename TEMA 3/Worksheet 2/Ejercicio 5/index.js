function paresImpares(){
    var nums=[];
    var pares=[];
    var impares=[];
    for(var i=0;i<100;i++){
            nums[i]=Math.round(Math.random()*(1000-1)+1);
        if(nums[i]%2==0){
            pares.push(nums[i]);
        }else{
            impares.push(nums[i]);
        }
    }

   document.write("<strong>Array sin ordenar</strong> <br>");
    for(var y=0;y<nums.length;y++)
        document.write(nums[y]+" ");

    document.write("<br>");
    console.log(nums.length);

    nums=[];

    for(var z=0;z<pares.length;z++)
        nums.push(pares[z]);    
    
    for(var x=0;x<impares.length;x++)
        nums.push("<font color=red>"+impares[x]+" </font");

    document.write("<strong>Array ordenado </strong><br> ");

    for(var y=0;y<nums.length;y++)
        document.write(nums[y]+" ");

    console.log(nums.length);
}
       
paresImpares();

