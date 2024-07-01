
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #05e2ff 
		"--color-primary-50": "218 251 255", // #dafbff
		"--color-primary-100": "205 249 255", // #cdf9ff
		"--color-primary-200": "193 248 255", // #c1f8ff
		"--color-primary-300": "155 243 255", // #9bf3ff
		"--color-primary-400": "80 235 255", // #50ebff
		"--color-primary-500": "5 226 255", // #05e2ff
		"--color-primary-600": "5 203 230", // #05cbe6
		"--color-primary-700": "4 170 191", // #04aabf
		"--color-primary-800": "3 136 153", // #038899
		"--color-primary-900": "2 111 125", // #026f7d
		// secondary | #17008a 
		"--color-secondary-50": "220 217 237", // #dcd9ed
		"--color-secondary-100": "209 204 232", // #d1cce8
		"--color-secondary-200": "197 191 226", // #c5bfe2
		"--color-secondary-300": "162 153 208", // #a299d0
		"--color-secondary-400": "93 77 173", // #5d4dad
		"--color-secondary-500": "23 0 138", // #17008a
		"--color-secondary-600": "21 0 124", // #15007c
		"--color-secondary-700": "17 0 104", // #110068
		"--color-secondary-800": "14 0 83", // #0e0053
		"--color-secondary-900": "11 0 68", // #0b0044
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #ffffff 
		"--color-success-50": "255 255 255", // #ffffff
		"--color-success-100": "255 255 255", // #ffffff
		"--color-success-200": "255 255 255", // #ffffff
		"--color-success-300": "255 255 255", // #ffffff
		"--color-success-400": "255 255 255", // #ffffff
		"--color-success-500": "255 255 255", // #ffffff
		"--color-success-600": "230 230 230", // #e6e6e6
		"--color-success-700": "191 191 191", // #bfbfbf
		"--color-success-800": "153 153 153", // #999999
		"--color-success-900": "125 125 125", // #7d7d7d
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #292d38 
		"--color-surface-50": "223 224 225", // #dfe0e1
		"--color-surface-100": "212 213 215", // #d4d5d7
		"--color-surface-200": "202 203 205", // #cacbcd
		"--color-surface-300": "169 171 175", // #a9abaf
		"--color-surface-400": "105 108 116", // #696c74
		"--color-surface-500": "41 45 56", // #292d38
		"--color-surface-600": "37 41 50", // #252932
		"--color-surface-700": "31 34 42", // #1f222a
		"--color-surface-800": "25 27 34", // #191b22
		"--color-surface-900": "20 22 27", // #14161b
		
	}
}