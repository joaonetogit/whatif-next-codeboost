import Image from 'next/image';
import { PopupVideoStyle } from './styles';
import IconPlay from '../../assets/play.svg';

export function PopupVideo() {
  return (
    <PopupVideoStyle>
      <span>ASSISTA AO TRAILER</span>
      <button>
        <div>
          <Image src={IconPlay} alt="Icon play" />
        </div>
      </button>
    </PopupVideoStyle>
  );
}
