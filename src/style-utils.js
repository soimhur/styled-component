import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
    @media (max-width: 1000px) {
        ${css(...args)}
    }
  `,
};

export const truncate = (width) => {
    return `
        width: ${width};
        white-space: nowrap
        overflow: hidden;
        text-overflow: ellipsis;
    `;
}