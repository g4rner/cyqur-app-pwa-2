const openEye='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8L3.07945 4.30466C4.29638 2.84434 6.09909 2 8 2C9.90091 2 11.7036 2.84434 12.9206 4.30466L16 8L12.9206 11.6953C11.7036 13.1557 9.90091 14 8 14C6.09909 14 4.29638 13.1557 3.07945 11.6953L0 8ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z" fill="#777777"/>\n  </svg>\n  ',closedEye='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6491 2.5735C9.82678 2.19994 8.92502 2 8 2C6.09909 2 4.29638 2.84434 3.07945 4.30466L0 8L2.37391 10.8487L5.00759 8.21502C5.00256 8.144 5 8.0723 5 8C5 6.34315 6.34315 5 8 5C8.0723 5 8.144 5.00256 8.21502 5.00759L10.6491 2.5735ZM5.30907 9.32775L3.01674 11.6201L3.07945 11.6953C3.49294 12.1915 3.97405 12.6166 4.50366 12.9616L6.74129 10.724C6.11915 10.436 5.61232 9.94117 5.30907 9.32775ZM10.724 6.74129C10.436 6.11915 9.94117 5.61232 9.32775 5.30907L11.5578 3.07898C12.0632 3.41654 12.5231 3.82776 12.9206 4.30466L13.0297 4.43559L10.724 6.74129ZM7.88175 10.9977C7.92098 10.9992 7.9604 11 8 11C9.65685 11 11 9.65685 11 8C11 7.9604 10.9992 7.92098 10.9977 7.88175L13.6725 5.20698L16 8L12.9206 11.6953C11.7036 13.1557 9.90091 14 8 14C7.10136 14 6.22467 13.8113 5.42143 13.458L7.88175 10.9977Z" fill="#777777"/>\n<rect x="13.6367" y="1" width="2" height="18.1536" transform="rotate(45 13.6367 1)" fill="#777777"/>\n</svg>\n',loadingCircle='<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="#fff" stop-opacity="0" offset="0%"/><stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/><stop stop-color="#fff" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)"><path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" /> </path> <circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" /></circle> </g> </g></svg>',storageIcon="<svg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M5 4.76393C5.84696 3.07001 7.57828 2 9.47214 2H14.5279C16.4217 2 18.153 3.07001 19 4.76393L21.6833 10.1305C21.8916 10.5471 22 11.0064 22 11.4721V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V11.4721C2 11.0064 2.10844 10.5471 2.31672 10.1305L5 4.76393ZM9.47214 4C8.33582 4 7.29703 4.64201 6.78885 5.65836L4.10557 11.0249C4.03614 11.1638 4 11.3169 4 11.4721V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V11.4721C20 11.3169 19.9639 11.1638 19.8944 11.0249L17.2111 5.65836C16.703 4.64201 15.6642 4 14.5279 4H9.47214Z' fill='#4296FF'/><path fill-rule='evenodd' clip-rule='evenodd' d='M2 11H5.5C7.433 11 9 12.567 9 14.5C9 15.3284 9.67157 16 10.5 16H13.5C14.3284 16 15 15.3284 15 14.5C15 12.567 16.567 11 18.5 11H22V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V11ZM4 13V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V13H18.5C17.6716 13 17 13.6716 17 14.5C17 16.433 15.433 18 13.5 18H10.5C8.567 18 7 16.433 7 14.5C7 13.6716 6.32843 13 5.5 13H4Z' fill='#152C70' trashcan/></svg>",trashCan='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7H5H21" fill="#744BCD"/><path d="M3 7H5H21" stroke="#744BCD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M19 7V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V7H19Z" stroke="#744BCD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',eyeIcon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2691 11.7199L21.3767 11.5L21.2691 11.2801C19.5355 7.7395 15.9818 5.5 12 5.5C8.01821 5.5 4.46448 7.7395 2.73094 11.2801L2.62329 11.5L2.73094 11.7199C4.46448 15.2605 8.01821 17.5 12 17.5C15.9818 17.5 19.5355 15.2605 21.2691 11.7199ZM1.53928 11.5C3.24223 7.39095 7.28287 4.5 12 4.5C16.7171 4.5 20.7578 7.39095 22.4607 11.5C20.7578 15.6091 16.7171 18.5 12 18.5C7.28287 18.5 3.24223 15.6091 1.53928 11.5ZM15 11.5C15 9.84386 13.6561 8.5 12 8.5C10.3439 8.5 9 9.84386 9 11.5C9 13.1561 10.3439 14.5 12 14.5C13.6561 14.5 15 13.1561 15 11.5ZM8 11.5C8 9.29614 9.79614 7.5 12 7.5C14.2039 7.5 16 9.29614 16 11.5C16 13.7039 14.2039 15.5 12 15.5C9.79614 15.5 8 13.7039 8 11.5Z" fill="#744BCD" stroke="#744BCD"/></svg>';