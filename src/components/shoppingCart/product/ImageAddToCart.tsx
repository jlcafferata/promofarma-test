import React from "react";

interface IImageAddToCart {
  disabled: boolean;
  onClick: any;
}

const ImageAddToCart = (props: IImageAddToCart) => {
  const background = !!props.disabled ? "#cccccc" : "#8CBF00";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 10.9984"
      style={{
        marginLeft: "1rem",
        marginTop: "-0.5rem",
        width: "2.5rem",
        height: "2.5rem",
        fill: "white",
        backgroundColor: background,
        padding: "0.5rem",
        borderRadius: "5px",
        cursor: !!props.disabled?"not-allowed":"pointer"
      }}
      onClick={!props.disabled ? props.onClick : null}
    >
      <defs>
        <mask
          id="a"
          x="0"
          y="2.4549"
          width="5.8988"
          height="5.9314"
          maskUnits="userSpaceOnUse"
        >
          <g transform="translate(-2 -6.5008)">
            <path
              d="M2.0006,8.9557v5.9314H7.8988V8.9557Z"
              style={{ fill: "#fff" }}
            />
          </g>
        </mask>
      </defs>
      <path
        d="M11.955,14.1315a1.6719,1.6719,0,0,0-1.67,1.681,1.6286,1.6286,0,0,0,.4892,1.1933,1.6,1.6,0,0,0,1.18.4932,1.6837,1.6837,0,0,0,0-3.3675Z"
        transform="translate(-2 -6.5008)"
      />
      <path
        d="M18.6524,14.1315a1.6729,1.6729,0,1,0,1.18.49A1.6142,1.6142,0,0,0,18.6524,14.1315Z"
        transform="translate(-2 -6.5008)"
      />
      <path
        d="M21.755,9.3271l0,0a.7992.7992,0,0,0-.5912-.25H11.8451l-.304-1.8608a.8143.8143,0,0,0-.3659-.5624q-.0439-.0292-.09-.0555h-.0129c-.01,0-.0143-.0025-.0143-.007a.8106.8106,0,0,0-.3655-.0906H9.0208a.8411.8411,0,0,0-.8348.8408v0a.8411.8411,0,0,0,.8348.8408h.98l.2838,1.77a.6453.6453,0,0,0,.0069.1109l.58,3.471a2.4646,2.4646,0,0,1,1.0834-.2426,2.5113,2.5113,0,0,1,2.5129,2.52H16.139a2.5107,2.5107,0,0,1,4.0315-2.0068l1.7261-3.4844A.8358.8358,0,0,0,21.755,9.3271Z"
        transform="translate(-2 -6.5008)"
      />
      <g style={{ mask: "url(#a)" }}>
        <path
          d="M7.8988,12.22a.469.469,0,0,1-.1386.3412.4555.4555,0,0,1-.3377.14h-1.7v1.7073a.4671.4671,0,0,1-.1381.34.459.459,0,0,1-.3367.1386H4.6516a.4751.4751,0,0,1-.4773-.4783V12.701H2.4769a.458.458,0,0,1-.3382-.14A.47.47,0,0,1,2,12.2193v-.5971a.47.47,0,0,1,.1386-.34.457.457,0,0,1,.3382-.1416H4.1743V9.435a.4751.4751,0,0,1,.4773-.4788h.5957a.4581.4581,0,0,1,.3367.1386.4654.4654,0,0,1,.1386.34V11.14h1.7a.4573.4573,0,0,1,.3377.1416.4691.4691,0,0,1,.1386.34Z"
          transform="translate(-2 -6.5008)"
        />
      </g>
    </svg>
  );
};

export default ImageAddToCart;
