export const useConvert = (total) => {
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    return [ hours, minutes, seconds ];
}
;