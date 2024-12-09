export const referenceHeight = 2633
export const referenceProjectsHeight = 2700
export const referenceAboutHeight = 5150
export const referenceProjectsHeightRatio = (referenceProjectsHeight * 100) / referenceHeight
export const referenceAboutHeightRatio = (referenceAboutHeight * 100) / referenceHeight

export const displayHeight = document.documentElement.scrollHeight
export const currentProjectsHeight = displayHeight * referenceProjectsHeightRatio / 100
export const currentAboutHeight = displayHeight * referenceAboutHeightRatio / 100
