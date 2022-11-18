export function selectMostFavouriteTags(tagsFrequencyHistogram){
    return Object.keys(tagsFrequencyHistogram).map((key) => [ key, tagsFrequencyHistogram[key] ]).sort((a, b) => b[1] - a[1]).slice(0, 10).map((keyValue) => keyValue[0]);
}