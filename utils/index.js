export const size = (unit = 'rem', number = 1) => {
    function stripUnit(value) {
        return value / (value * 0 + 1);
    }

    return unit !== 'px' ? `${number}rem` : `${stripUnit(number) / stripUnit(16)}rem`;
} 