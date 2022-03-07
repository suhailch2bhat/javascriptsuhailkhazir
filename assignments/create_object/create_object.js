function CreateObject(arr) {
    // Write your code here
    let k={};                //     0          1       2     3
    for(i=0;i<arr.length;i++)                          //"mynameis","suhail","age","345"
      {
        if(i%2===0)
        {
           k[arr[i]]=arr[i+1];
        }
    }
     return k

}

module.exports = CreateObject;