import Loader from 'react-loader-spinner'
import {VideosLoaderContainer} from './styledComponents'

const LoaderView = () => (
  <VideosLoaderContainer data-testid="loader">
    <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
  </VideosLoaderContainer>
)

export default LoaderView
