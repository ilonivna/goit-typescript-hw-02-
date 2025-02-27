import { FC } from 'react';
import { ColorRing } from 'react-loader-spinner'
;


const Loader: FC = () => {
    return (
        <div>
        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            <p>Your personal search assistant is looking for images!..</p>
        </div>

    )
}
export default Loader;