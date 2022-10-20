const techList = (arrayTech, name) => {
  
  if (arrayTech.length === 0) return "Vazio!";

  const sortArray = arrayTech.sort();
  const technologyList = [];

  for (let index = 0; index < sortArray.length; index += 1){
    technologyList.push({
      tech: sortArray[index],
      name,
    });
  }
  return technologyList
}


module.exports = techList;