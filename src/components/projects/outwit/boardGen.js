export const boardGen = () => {
  let board = [];

  for (let i = 1; i <= 90; i++) {
    let obj = {
      pos: i,
      zone: 1,
      highlight: false,
    };

    if (
      i === 7 ||
      i === 8 ||
      i === 9 ||
      i === 16 ||
      i === 17 ||
      i === 18 ||
      i === 25 ||
      i === 26 ||
      i === 27
    ) {
      obj.zone = 2;
    } else if (
      i === 64 ||
      i === 65 ||
      i === 66 ||
      i === 73 ||
      i === 74 ||
      i === 75 ||
      i === 82 ||
      i === 83 ||
      i === 84
    ) {
      obj.zone = 3;
    }

    if ((i - 1) % 10 === 0 && i !== 41) {
      obj.occupied = 1;
    } else if (i % 10 === 0 && i !== 50) {
      obj.occupied = 3;
    } else if (i === 41) {
      obj.occupied = 2;
    } else if (i === 50) {
      obj.occupied = 4;
    } else obj.occupied = null;

    i < 10 ? (obj.edgeN = null) : (obj.edgeN = i - 9);
    i > 81 ? (obj.edgeS = null) : (obj.edgeS = i + 9);
    i % 9 === 0 ? (obj.edgeE = null) : (obj.edgeE = i + 1);
    (i - 1) % 9 === 0 ? (obj.edgeW = null) : (obj.edgeW = i - 1);

    if (obj.edgeN !== null && obj.edgeE !== null) {
      obj.edgeNE = obj.edgeN + 1;
    } else {
      obj.edgeNE = null;
    }

    if (obj.edgeN !== null && obj.edgeW !== null) {
      obj.edgeNW = obj.edgeN - 1;
    } else {
      obj.edgeNW = null;
    }

    if (obj.edgeS !== null && obj.edgeE !== null) {
      obj.edgeSE = obj.edgeS + 1;
    } else {
      obj.edgeSE = null;
    }

    if (obj.edgeS !== null && obj.edgeW !== null) {
      obj.edgeSW = obj.edgeS - 1;
    } else {
      obj.edgeSW = null;
    }

    board.push(obj);
  }
  return board;
};
