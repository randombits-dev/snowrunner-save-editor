import {render} from "@testing-library/react";
import Link from "./Link";

describe('Link', () => {
  it('should match snapshot', () => {
    const {container} = render(<Link url="http://www.darklyrics.com">Dark Lyrics</Link>);
    expect(container).toMatchSnapshot();
  });
});
