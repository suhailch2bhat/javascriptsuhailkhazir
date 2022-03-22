def addStrings(num1,num2):
         num1=num1[::-1]
         num2=num2[::-1]
         if len(num2)>len(num1):
               num1, num2=num2, num1
            #   temp = num1
            #   num1 = num2
            #   num2 = temp

         res=""
         carry=0
         for i in range(len(num2)):                      # 3
               val=int(num1[i])+int(num2[i])+carry  #2     #123    #0    #
               res+=str(val%10)                     #  2  #
         for i in range(len(num2),len(num1)):
               val=int(num1[i])+carry
               carry=val//10
               res+=str(val)
         if carry!=0:
            res+=str(carry) 
         res=res[::-1]
         return (str(res)) 
              
for i in range(int(input())):
   num1,num2=input().split()
   print(addStrings(num1,num2))