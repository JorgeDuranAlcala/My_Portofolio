export const size = (unit = 'rem', number = 1) => {
    function stripUnit(value) {
        return value / (value * 0 + 1);
    }

    return unit !== 'px' ? `${number}rem` : `${stripUnit(number) / stripUnit(16)}rem`;
} 

export const minOrMaxBreakpoint = (type, pixels) => {
    if(!type || !pixels) return

    return `(${type !== 'max' ? 'min' : 'max'}-width:${pixels}px)`
}