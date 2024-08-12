let ages=[46,23,79,16,56]

let old_age=0;
for(let i=0;i<=ages.length;i++)
{
        if(ages[i] > old_age)
        {
            old_age=ages[i];
        }
}
console.log(old_age);