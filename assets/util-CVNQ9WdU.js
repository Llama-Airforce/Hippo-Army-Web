function n(t){const r=t.match(/\((CurveLend|Fraxlend): ([^)]+)\) - (\d+)/);if(!r)return t;const e=r[2],a=parseInt(r[3],10);return a>1?`${e} (#${a})`:e}export{n as p};
