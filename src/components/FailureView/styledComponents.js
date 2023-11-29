import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 20px;
`

export const FailureViewImage = styled.img`
  width: 200px;
  height: 200px;
`
export const FailureViewHeading = styled.h1`
  color: #181818;
  font-family: 'roboto';
  font-size: 18px;
  text-align: center;
  font-weight: 500;
`

export const FailureViewText = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  text-align: center;
  font-weight: 500;
`

export const RetryButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  background-color: #4f46e5;
  border-radius: 5px;
  height: 36px;
  width: 100px;
  border: none;
`
