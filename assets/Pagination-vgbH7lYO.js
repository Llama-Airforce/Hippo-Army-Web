async function i(t,a=0,n=1e3){const c=await t(a,n),e=await(c.length>=n?i(t,a+1,n):Promise.resolve([]));return c.concat(e)}export{i as p};
