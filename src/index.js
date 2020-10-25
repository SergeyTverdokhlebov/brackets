module.exports =
    function check(str, bracketsConfig) {
        let config = bracketsConfig.flat();
        let stack = [];

        for (let bracket of str) {

            let brIndex = config.indexOf(bracket);

            if (brIndex === -1) {
                continue;
            }

            if (config[brIndex] === config[stack[stack.length - 1]]) {
                stack.pop();
                continue;
            }

            if (brIndex % 2 === 0) {
 
                stack.push(brIndex + 1);
            } else {

                if (stack.pop() !== brIndex) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }