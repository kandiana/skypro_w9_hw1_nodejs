const fs = require('fs');
const { getAverageColor } = require('fast-average-color-node');

const pathToPicture = process.env.PIC;

if (!pathToPicture) {
  console.log('Error: PIC variable should contain path to picture');
  process.exit(400);
}

if (!fs.existsSync(pathToPicture)) {
  console.log('Error: file not found');
  process.exit(404);
}

Promise.all([
  getAverageColor(pathToPicture, { algorithm: 'simple' }),
  getAverageColor(pathToPicture),
]).then(([averageColorSimple, averageColorSqrt]) => {
  console.log(`simple:\t${averageColorSimple.hex},\nsqrt:\t${averageColorSqrt.hex}`);
});
