var sum = 0;
for (i=2;i<process.argv.length;i++) {
	sum += +process.argv[i]; // need to prefix with a + to typecast as a number
}
console.log(sum);