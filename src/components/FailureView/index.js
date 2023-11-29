import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewText,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <FailureViewContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
      <FailureViewText>
        We are having some trouble to complete your request. Please try again.
      </FailureViewText>
      <RetryButton type="button" onClick={onClickRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )
}

export default FailureView
