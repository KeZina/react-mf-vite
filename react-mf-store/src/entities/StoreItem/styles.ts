import styled from "styled-components";

export const StyledStoreItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-width: 160px;
    padding: 16px 24px;
    background: rgb(255 249 130);
    box-shadow: rgb(255 249 130) 0px 0px 10px;
    border-radius: 12px;
`

export const StyledStoreItemTitle = styled.span`
    font-weight: 600;
`;

export const StyledSubTitle = styled.span`
    font-size: 14px;
    opacity: 0.8;
    margin-right: 8px;
`

export const StyledStoreItemPrice = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 12px;
`