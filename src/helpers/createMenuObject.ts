type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'waterAnimal' | 'reptile';

export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    waterAnimal: false,
    reptile: false
  };

  if(activeMenu !== '') {
    returnObject[activeMenu] = true
  };

  return returnObject;
}