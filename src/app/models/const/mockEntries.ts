export const weightList2=[
    {title:"Squat",
      total:140,
      set:"3",
      rep:"5",
      id:0,
    },
    {title:"Bench",
      total:105,
      set:"3",
      rep:"5",
      id:1,
    },
    {title:"Deadlift",
      total:165,
      set:"1",
      rep:"5",
      id:2,
    },
  ];

export const squatMax = 165;
export const benchMax = 135;
export const deadliftMax = 205;
export const squat = ()=>{
  let listEx:any = [];
  for(let i=0; i<6; i++){
    listEx.push({
      sets:3,
      reps:5,
      relInt:75+i*4,
    })
  }
  return listEx;
}

export const bench = ()=>{
  let listEx:any = [];
  for(let i=0; i<6; i++){
    listEx.push({
      sets:3,
      reps:5,
      relInt:75+i*4,
    })
  }
  return listEx;
}
export const deadlift = ()=>{
  let listEx:any = [];
  for(let i=0; i<6; i++){
    listEx.push({
      sets:3,
      reps:5,
      relInt:75+i*4,
    })
  }
  return listEx;
}
