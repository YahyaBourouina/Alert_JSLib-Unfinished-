		var YahyaCodesStudio = (function () {
			var alertLib = {
				y_alertNormal: function (options) {
					// Extract options
					// TODO- costum btns
					var tit = options.Title || "Hello!";
					var msg = options.Message || "Thank you for supporting our community * YahyaCodesStudio *";
					var ico = options.Icon || "give";
					var btn = options.ButtonsNumber || 0;
					var sec = options.Duration || 5;
					var wyt = options.Time || 0;
					var bht = options.Height || 300;
					var bt1 = options.Button1 || "";
					var b1f = options.Button1Func;
					var bt2 = options.Button2 || "";
					var b2f = options.Button2Func;
					var bt3 = options.Button3 || "";
					var b3f = options.Button3Func;
					var bdclr = options.BackgroundColor || "#fff";
					var b1b = options.Button1Border || "none";
					var b2b = options.Button2Border || "none";
					var b3b = options.Button3Border || "none";
					var b1bo = options.Button1BorderOver;
					var b2bo = options.Button2BorderOver;
					var b3bo = options.Button3BorderOver;
					var b1t = options.Button1Color || "#FFF";
					var b2t = options.Button2Color || "#FFF";
					var b3t = options.Button3Color || "#FFF";
					var b1to = options.Button1ColorOver;
					var b2to = options.Button2ColorOver;
					var b3to = options.Button3ColorOver;
					var b1c = options.Button1BackgroundColor || "#4CAF50";
					var b2c = options.Button2BackgroundColor || "#4CAF50";
					var b3c = options.Button3BackgroundColor || "#4CAF50";
					var b1o = options.Button1BackgroundColorOver || "#45a049";
					var b2o = options.Button2BackgroundColorOver || "#45a049";
					var b3o = options.Button3BackgroundColorOver || "#45a049";
					var hclr = options.TitleColor || "#000";
					var pclr = options.MessageColor || "#000";
					var ntfy = options.AllowNotifications || false;
					
					const body = document.createElement("div");
                    const dark = document.createElement("div");
                    const title = document.createElement("h1");
                    const message = document.createElement("p");
                    const icon = document.createElement("img");
                    const btn2 = document.createElement("button");
                    const btn1 = document.createElement("button");
                    const btn3 = document.createElement("button");
                    btn1.innerText = bt1;
                    btn2.innerText = bt2;
                    btn3.innerText = bt3;
					
					title.style.color = hclr;
					message.style.color = pclr;
                    
                    body.style.position = "fixed";
                    body.style.zIndex = "9999";
                    body.style.width = "420px";
                    body.style.height = bht + "px";
                    body.style.webkitTransition = "all 0.8s cubic-bezier(1, 2, 0, 0.6)";
                    body.style.transition = "all 0.8s cubic-bezier(1, 2, 0, 0.6)";
                    body.style.transform = "scale(0)";
					body.style.background = bdclr;
                    body.style.borderRadius = "10px";
                    body.style.boxShadow = "0px 0px 25px 25px rgba(210, 210, 210, 0.26)";
                    body.style.display = "block";
                    body.style.padding = "15px";
                    body.style.margin = "auto";
                    body.style.left = "0";
                    body.style.top = "0";
                    body.style.right = "0";
                    body.style.bottom = "0";
                    body.style.textAlign = "center";
                    body.style.fontFamily = "courier new";
                    
                    dark.style.position = "fixed";
                    dark.style.zIndex = "9998";
                    dark.style.width = "100%";
                    dark.style.height = "100%";
                    dark.style.webkitTransition = "all 0.2s ease-in";
                    dark.style.transition = "all 0.2s ease-in";
                    dark.style.transform = "scale(0)";
                    dark.style.background = "rgba(0,0,0,.3)";
					dark.style.left = "0";
					dark.style.top = "0";
                    
                    btn1.style.position = "relative";
                    btn1.style.display = "none";
                    btn1.style.padding = "10px 20px";
                    btn1.style.backgroundColor = b1c;
                    btn1.style.color = b1t;
                    btn1.style.border = b1b;
                    btn1.style.borderRadius = "5px";
                    btn1.style.cursor = "pointer";
                    btn1.style.fontSize = "16px";
                    btn1.style.marginLeft = "10px";
                    btn1.style.marginRight = "10px";
					btn1.style.webkitTransition = "all 0.2s linear";
                    btn1.style.transition = "all 0.2s linear";
                    
                    btn2.style.position = "relative";
                    btn2.style.display = "none";
                    btn2.style.padding = "10px 20px";
                    btn2.style.backgroundColor = b2c;
                    btn2.style.color = b2t;
                    btn2.style.border = b2b;
                    btn2.style.borderRadius = "5px";
                    btn2.style.cursor = "pointer";
                    btn2.style.fontSize = "16px";
					btn2.style.webkitTransition = "all 0.2s linear";
                    btn2.style.transition = "all 0.2s linear";
                    
                    btn3.style.position = "relative";
                    btn3.style.display = "none";
                    btn3.style.padding = "10px 20px";
                    btn3.style.backgroundColor = b3c;
                    btn3.style.color = b3t;
                    btn3.style.border = b3b;
                    btn3.style.borderRadius = "5px";
                    btn3.style.cursor = "pointer";
                    btn3.style.fontSize = "16px";
					btn3.style.webkitTransition = "all 0.2s linear";
                    btn3.style.transition = "all 0.2s linear";
                    
                    icon.style.width = "80px";
                    
                    document.body.appendChild(dark);
                    document.body.appendChild(body);
                    
                    body.appendChild(icon);
                    body.appendChild(title);
                    body.appendChild(message);
                    body.appendChild(btn2);
                    body.appendChild(btn1);
                    body.appendChild(btn3);
                    
					body.id = "yahyacodesstudio________body_alert_created_"
					dark.id = "yahyacodesstudio________dark_black_endofthinkingcapacity_of_alert_created_"
                    btn1.id = "y_c_s_firstMiddleBtn";
                    btn2.id = "y_c_s_thirdLeftBtn";
                    btn3.id = "y_c_s_secondRightBtn";
                    
                    btn1.onmouseenter = function () {
						btn1.style.backgroundColor = b1o;
						btn1.style.color = b1to;
						btn1.style.border = b1bo;
					};
                    btn2.onmouseenter = function () {
						btn2.style.backgroundColor = b2o;
						btn2.style.color = b2to;
						btn2.style.border = b2bo;
					};
                    btn3.onmouseenter = function () {
						btn3.style.backgroundColor = b3o;
						btn3.style.color = b3to;
						btn3.style.border = b3bo;
					};
                    btn1.onmouseleave = function () {
						btn1.style.backgroundColor = b1c;
						btn1.style.color = b1t;
						btn1.style.border = b1b;
					};
                    btn2.onmouseleave = function () {
						btn2.style.backgroundColor = b2c;
						btn2.style.color = b2t;
						btn2.style.border = b2b;
					};
                    btn3.onmouseleave = function () {
						btn3.style.backgroundColor = b3c;
						btn3.style.color = b3t;
						btn3.style.border = b3b;
					};
                    
                    setTimeout(function() {
                        body.style.transform = "scale(1)";
                        dark.style.transform = "scale(1)";
                        title.innerText = tit;
                        message.innerText = msg + "\n\n";
						if (ico.startsWith("http")) {
							icon.src = ico;
						} else {
							icon.src = "./img/" + ico + ".png";
						}
                        document.body.style.overflow = "hidden";
                        document.body.style.margin = "0";
                        document.body.style.padding = "0";
                    }, wyt * 1000);
					
					if (ntfy) {
						if (Notification.permission !== 'granted')
							Notification.requestPermission();
						else {
							if (ico.startsWith("http")) {
								var notification = new Notification(tit, {
									icon: ico,
									body: msg + "\n" + bt2 + " / " + bt1 + " / " + bt3
								});
								notification.onclick = function() {};
							} else {
								var notification = new Notification(tit, {
									icon: "./img/" + ico + ".png",
									body: msg + "\n" + bt2 + " / " + bt1 + " / " + bt3
								});
								notification.onclick = function() {};
							}
						}
					}
					
                    if (btn == 0 || btn > 3) {
						
						if (btn1.innerText.trim() !== "" && b1f != null) {
							btn1.style.display = "inline-block";
                            btn1.onclick = b1f;
						} else {
							btn1.style.display = "none";
						}
						if (btn2.innerText.trim() !== "" && b2f != null) {
							btn2.style.display = "inline-block";
                            btn2.onclick = b2f;
						} else {
							btn2.style.display = "none";
						}
						if (btn3.innerText.trim() !== "" && b3f != null) {
							btn3.style.display = "inline-block";
                            btn3.onclick = b3f;
						} else {
							btn3.style.display = "none";
						}
						if (b3f == null && b1f == null && b2f == null) {
							btn1.style.display = "none";
							btn1.style.display = "none";
							btn1.style.display = "none";
							const hideAlert = () => {
								body.style.transition = "all 0.1s ease";
								body.style.transform = "scale(0)";
								dark.style.transform = "scale(0)";
								document.body.style.overflow = "auto";
								document.body.style.margin = "";
								document.body.style.padding = "";
								setTimeout(function() {
										body.remove();
										dark.remove();
									}, 500);
							};
							
							setTimeout(hideAlert, sec * 1000 + wyt * 1000);
							
							dark.addEventListener("click", () => {
								clearTimeout(hideAlert);
								hideAlert();
							});
						}
                    } else if (btn == 1) {
                        if (btn1.innerText.trim() === "" || b1f == null) {
                            btn1.style.display = "none";
                        } else if (b1f == null) {
                            btn1.style.display = "none";
                        } else {
                            btn1.style.display = "inline-block";
                            btn1.onclick = b1f;
                        }
						if (btn2.innerText.trim() !== "" && b2f != null) {
							btn2.style.display = "inline-block";
                            btn2.onclick = b2f;
						}
						if (btn3.innerText.trim() !== "" && b3f != null) {
							btn3.style.display = "inline-block";
                            btn3.onclick = b3f;
						}
						if (b3f == null && b1f == null && b2f == null) {
							btn1.style.display = "none";
							btn1.style.display = "none";
							btn1.style.display = "none";
							const hideAlert = () => {
								body.style.transition = "all 0.1s ease";
								body.style.transform = "scale(0)";
								dark.style.transform = "scale(0)";
								document.body.style.overflow = "auto";
								document.body.style.margin = "";
								document.body.style.padding = "";
								setTimeout(function() {
										body.remove();
										dark.remove();
									}, 500);
							};
							
							setTimeout(hideAlert, sec * 1000 + wyt * 1000);
							
							dark.addEventListener("click", () => {
								clearTimeout(hideAlert);
								hideAlert();
							});
						}
                    } else if (btn == 2) {
                        if (btn1.innerText.trim() === "" || b1f == null) {
                            btn1.style.display = "none";
                        } else if (b1f == null) {
                            btn1.style.display = "none";
                        } else {
                            btn1.style.display = "inline-block";
                            btn1.onclick = b1f;
                        }
                        if (btn2.innerText.trim() === "" || b2f == null) {
                            btn2.style.display = "none";
                        } else if (b2f == null) {
                            btn2.style.display = "none";
                        } else {
                            btn2.style.display = "inline-block";
                            btn2.onclick = b2f;
                        }
						if (btn3.innerText.trim() !== "" && b3f != null) {
							btn3.style.display = "inline-block";
                            btn3.onclick = b3f;
						}
						if (b3f == null && b1f == null && b2f == null) {
							btn1.style.display = "none";
							btn1.style.display = "none";
							btn1.style.display = "none";
							const hideAlert = () => {
								body.style.transition = "all 0.1s ease";
								body.style.transform = "scale(0)";
								dark.style.transform = "scale(0)";
								document.body.style.overflow = "auto";
								document.body.style.margin = "";
								document.body.style.padding = "";
								setTimeout(function() {
										body.remove();
										dark.remove();
									}, 500);
							};
							
							setTimeout(hideAlert, sec * 1000 + wyt * 1000);
							
							dark.addEventListener("click", () => {
								clearTimeout(hideAlert);
								hideAlert();
							});
						}
                    } else if (btn == 3) {
                        if (btn1.innerText.trim() === "" || b1f == null) {
                            btn1.style.display = "none";
                        } else if (b1f == null) {
                            btn1.style.display = "none";
                        } else {
                            btn1.style.display = "inline-block";
                            btn1.onclick = b1f;
                        }
                        if (btn2.innerText.trim() === "" || b2f == null) {
                            btn2.style.display = "none";
                        } else if (b2f == null) {
                            btn2.style.display = "none";
                        } else {
                            btn2.style.display = "inline-block";
                            btn2.onclick = b2f;
                        }
                        if (btn3.innerText.trim() === "") {
                            btn3.style.display = "none";
                        } else if (b3f == null) {
                            btn3.style.display = "none";
                        } else {
                            btn3.style.display = "inline-block";
                            btn3.onclick = b3f;
                        }
						if (b3f == null && b1f == null && b2f == null) {
							btn1.style.display = "none";
							btn1.style.display = "none";
							btn1.style.display = "none";
							const hideAlert = () => {
								body.style.transition = "all 0.1s ease";
								body.style.transform = "scale(0)";
								dark.style.transform = "scale(0)";
								document.body.style.overflow = "auto";
								document.body.style.margin = "";
								document.body.style.padding = "";
								setTimeout(function() {
										body.remove();
										dark.remove();
									}, 500);
							};
							
							setTimeout(hideAlert, sec * 1000 + wyt * 1000);
							
							dark.addEventListener("click", () => {
								clearTimeout(hideAlert);
								hideAlert();
							});
						}
                    }
				},
				
				y_alertSimple: function (options) {
					// Extract options
					var tit = options.Title || "Hello!";
					var msg = options.Message || "Thank you for supporting our community * YahyaCodesStudio *";
					var ico = options.Icon || "give";
					var btn = options.ButtonsNumber || 0;
					var sec = options.Duration || 5;
					var wyt = options.Time || 0;
					var bt1 = options.Button1 || "";
					var b1f = options.Button1Func;
					var bt2 = options.Button2 || "";
					var b2f = options.Button2Func;
					var bt3 = options.Button3 || "";
					var b3f = options.Button3Func;
					var bdclr = options.BackgroundColor || "#fff";
					var b1b = options.Button1Border || "none";
					var b2b = options.Button2Border || "none";
					var b3b = options.Button3Border || "none";
					var b1bo = options.Button1BorderOver;
					var b2bo = options.Button2BorderOver;
					var b3bo = options.Button3BorderOver;
					var b1t = options.Button1Color || "#FFF";
					var b2t = options.Button2Color || "#FFF";
					var b3t = options.Button3Color || "#FFF";
					var b1to = options.Button1ColorOver;
					var b2to = options.Button2ColorOver;
					var b3to = options.Button3ColorOver;
					var b1c = options.Button1BackgroundColor || "#4CAF50";
					var b2c = options.Button2BackgroundColor || "#4CAF50";
					var b3c = options.Button3BackgroundColor || "#4CAF50";
					var b1o = options.Button1BackgroundColorOver || "#45a049";
					var b2o = options.Button2BackgroundColorOver || "#45a049";
					var b3o = options.Button3BackgroundColorOver || "#45a049";
					var hclr = options.TitleColor || "#000";
					var pclr = options.MessageColor || "#000";
					var ntfy = options.AllowNotifications || false;
					
					const body = document.createElement("div");
                    const dark = document.createElement("div");
                    const title = document.createElement("h1");
                    const message = document.createElement("p");
                    const icon = document.createElement("img");
                    const btn2 = document.createElement("button");
                    const btn1 = document.createElement("button");
                    const btn3 = document.createElement("button");
                    btn1.innerText = bt1;
                    btn2.innerText = bt2;
                    btn3.innerText = bt3;
					
					title.style.color = hclr;
					message.style.color = pclr;
                    
                    body.style.position = "fixed";
                    body.style.zIndex = "9999";
                    body.style.width = "420px";
                    body.style.height = "auto";
                    body.style.webkitTransition = "all 0.8s cubic-bezier(1, 2, 0, 0.6)";
                    body.style.transition = "all 0.8s cubic-bezier(1, 2, 0, 0.6)";
                    body.style.transform = "scale(0) translate(-50%, -50%)";
					body.style.background = bdclr;
                    body.style.borderRadius = "10px";
                    body.style.boxShadow = "0px 0px 25px 25px rgba(210, 210, 210, 0.26)";
                    //body.style.display = "block";
                    body.style.padding = "15px";
                    //body.style.margin = "auto";
                    body.style.left = "50%";
                    body.style.top = "50%";
                    //body.style.right = "0";
                    //body.style.bottom = "0";
                    body.style.textAlign = "center";
                    body.style.fontFamily = "courier new";
                    
                    dark.style.position = "fixed";
                    dark.style.zIndex = "9998";
                    dark.style.width = "100%";
                    dark.style.height = "100%";
                    dark.style.webkitTransition = "all 0.2s ease-in";
                    dark.style.transition = "all 0.2s ease-in";
                    dark.style.transform = "scale(0)";
                    dark.style.background = "rgba(0,0,0,.3)";
					dark.style.left = "0";
					dark.style.top = "0";
                    
                    btn1.style.position = "relative";
                    btn1.style.display = "none";
                    btn1.style.padding = "10px 20px";
                    btn1.style.backgroundColor = b1c;
                    btn1.style.color = b1t;
                    btn1.style.border = b1b;
                    btn1.style.borderRadius = "5px";
                    btn1.style.cursor = "pointer";
                    btn1.style.fontSize = "16px";
                    btn1.style.marginLeft = "10px";
                    btn1.style.marginRight = "10px";
					btn1.style.webkitTransition = "all 0.2s linear";
                    btn1.style.transition = "all 0.2s linear";
                    
                    btn2.style.position = "relative";
                    btn2.style.display = "none";
                    btn2.style.padding = "10px 20px";
                    btn2.style.backgroundColor = b2c;
                    btn2.style.color = b2t;
                    btn2.style.border = b2b;
                    btn2.style.borderRadius = "5px";
                    btn2.style.cursor = "pointer";
                    btn2.style.fontSize = "16px";
					btn2.style.webkitTransition = "all 0.2s linear";
                    btn2.style.transition = "all 0.2s linear";
                    
                    btn3.style.position = "relative";
                    btn3.style.display = "none";
                    btn3.style.padding = "10px 20px";
                    btn3.style.backgroundColor = b3c;
                    btn3.style.color = b3t;
                    btn3.style.border = b3b;
                    btn3.style.borderRadius = "5px";
                    btn3.style.cursor = "pointer";
                    btn3.style.fontSize = "16px";
					btn3.style.webkitTransition = "all 0.2s linear";
                    btn3.style.transition = "all 0.2s linear";
                    
                    icon.style.width = "80px";
                    
                    document.body.appendChild(dark);
                    document.body.appendChild(body);
                    
                    body.appendChild(icon);
                    body.appendChild(title);
                    body.appendChild(message);
                    body.appendChild(btn2);
                    body.appendChild(btn1);
                    body.appendChild(btn3);
                    
					body.id = "yahyacodesstudio________body_alert_created_"
					dark.id = "yahyacodesstudio________dark_black_endofthinkingcapacity_of_alert_created_"
                    btn1.id = "y_c_s_firstMiddleBtn";
                    btn2.id = "y_c_s_thirdLeftBtn";
                    btn3.id = "y_c_s_secondRightBtn";
                    
                    btn1.onmouseenter = function () {
						btn1.style.backgroundColor = b1o;
						btn1.style.color = b1to;
						btn1.style.border = b1bo;
					};
                    btn2.onmouseenter = function () {
						btn2.style.backgroundColor = b2o;
						btn2.style.color = b2to;
						btn2.style.border = b2bo;
					};
                    btn3.onmouseenter = function () {
						btn3.style.backgroundColor = b3o;
						btn3.style.color = b3to;
						btn3.style.border = b3bo;
					};
                    btn1.onmouseleave = function () {
						btn1.style.backgroundColor = b1c;
						btn1.style.color = b1t;
						btn1.style.border = b1b;
					};
                    btn2.onmouseleave = function () {
						btn2.style.backgroundColor = b2c;
						btn2.style.color = b2t;
						btn2.style.border = b2b;
					};
                    btn3.onmouseleave = function () {
						btn3.style.backgroundColor = b3c;
						btn3.style.color = b3t;
						btn3.style.border = b3b;
					};
                    
                    setTimeout(function() {
                        body.style.transform = "scale(1)  translate(-50%, -50%)";
                        dark.style.transform = "scale(1)";
                        title.innerText = tit;
                        message.innerText = msg + "\n\n";
						if (ico.startsWith("http")) {
							icon.src = ico;
						} else {
							icon.src = "./img/" + ico + ".png";
						}
                        document.body.style.overflow = "hidden";
                        document.body.style.margin = "0";
                        document.body.style.padding = "0";
                    }, wyt * 1000);
					
					if (ntfy) {
						if (Notification.permission !== 'granted')
							Notification.requestPermission();
						else {
							if (ico.startsWith("http")) {
								var notification = new Notification(tit, {
									icon: ico,
									body: msg + "\n" + bt2 + " / " + bt1 + " / " + bt3
								});
								notification.onclick = function() {};
							} else {
								var notification = new Notification(tit, {
									icon: "./img/" + ico + ".png",
									body: msg + "\n" + bt2 + " / " + bt1 + " / " + bt3
								});
								notification.onclick = function() {};
							}
						}
					}
					
                    if (btn == 0 || btn > 3) {
						
						if (btn1.innerText.trim() !== "" && b1f != null) {
							btn1.style.display = "inline-block";
                            btn1.onclick = b1f;
						} else {
							btn1.style.display = "none";
						}
						if (btn2.innerText.trim() !== "" && b2f != null) {
							btn2.style.display = "inline-block";
                            btn2.onclick = b2f;
						} else {
							btn2.style.display = "none";
						}
						if (btn3.innerText.trim() !== "" && b3f != null) {
							btn3.style.display = "inline-block";
                            btn3.onclick = b3f;
						} else {
							btn3.style.display = "none";
						}
						if (b3f == null && b1f == null && b2f == null) {
							btn1.style.display = "none";
							btn1.style.display = "none";
							btn1.style.display = "none";
							const hideAlert = () => {
								body.style.transition = "all 0.1s ease";
								body.style.transform = "scale(0)  translate(-50%, -50%)";
								dark.style.transform = "scale(0)";
								document.body.style.overflow = "auto";
								document.body.style.margin = "";
								document.body.style.padding = "";
								setTimeout(function() {
										body.remove();
										dark.remove();
									}, 500);
							};
							
							setTimeout(hideAlert, sec * 1000 + wyt * 1000);
							
							dark.addEventListener("click", () => {
								clearTimeout(hideAlert);
								hideAlert();
							});
						}
                    } else if (btn == 1) {
                        if (btn1.innerText.trim() === "" || b1f == null) {
                            btn1.style.display = "none";
                        } else if (b1f == null) {
                            btn1.style.display = "none";
                        } else {
                            btn1.style.display = "inline-block";
                            btn1.onclick = b1f;
                        }
						if (btn2.innerText.trim() !== "" && b2f != null) {
							btn2.style.display = "inline-block";
                            btn2.onclick = b2f;
						}
						if (btn3.innerText.trim() !== "" && b3f != null) {
							btn3.style.display = "inline-block";
                            btn3.onclick = b3f;
						}
						if (b3f == null && b1f == null && b2f == null) {
							btn1.style.display = "none";
							btn1.style.display = "none";
							btn1.style.display = "none";
							const hideAlert = () => {
								body.style.transition = "all 0.1s ease";
								body.style.transform = "scale(0)  translate(-50%, -50%)";
								dark.style.transform = "scale(0)";
								document.body.style.overflow = "auto";
								document.body.style.margin = "";
								document.body.style.padding = "";
								setTimeout(function() {
										body.remove();
										dark.remove();
									}, 500);
							};
							
							setTimeout(hideAlert, sec * 1000 + wyt * 1000);
							
							dark.addEventListener("click", () => {
								clearTimeout(hideAlert);
								hideAlert();
							});
						}
                    } else if (btn == 2) {
                        if (btn1.innerText.trim() === "" || b1f == null) {
                            btn1.style.display = "none";
                        } else if (b1f == null) {
                            btn1.style.display = "none";
                        } else {
                            btn1.style.display = "inline-block";
                            btn1.onclick = b1f;
                        }
                        if (btn2.innerText.trim() === "" || b2f == null) {
                            btn2.style.display = "none";
                        } else if (b2f == null) {
                            btn2.style.display = "none";
                        } else {
                            btn2.style.display = "inline-block";
                            btn2.onclick = b2f;
                        }
						if (btn3.innerText.trim() !== "" && b3f != null) {
							btn3.style.display = "inline-block";
                            btn3.onclick = b3f;
						}
						if (b3f == null && b1f == null && b2f == null) {
							btn1.style.display = "none";
							btn1.style.display = "none";
							btn1.style.display = "none";
							const hideAlert = () => {
								body.style.transition = "all 0.1s ease";
								body.style.transform = "scale(0)  translate(-50%, -50%)";
								dark.style.transform = "scale(0)";
								document.body.style.overflow = "auto";
								document.body.style.margin = "";
								document.body.style.padding = "";
								setTimeout(function() {
										body.remove();
										dark.remove();
									}, 500);
							};
							
							setTimeout(hideAlert, sec * 1000 + wyt * 1000);
							
							dark.addEventListener("click", () => {
								clearTimeout(hideAlert);
								hideAlert();
							});
						}
                    } else if (btn == 3) {
                        if (btn1.innerText.trim() === "" || b1f == null) {
                            btn1.style.display = "none";
                        } else if (b1f == null) {
                            btn1.style.display = "none";
                        } else {
                            btn1.style.display = "inline-block";
                            btn1.onclick = b1f;
                        }
                        if (btn2.innerText.trim() === "" || b2f == null) {
                            btn2.style.display = "none";
                        } else if (b2f == null) {
                            btn2.style.display = "none";
                        } else {
                            btn2.style.display = "inline-block";
                            btn2.onclick = b2f;
                        }
                        if (btn3.innerText.trim() === "") {
                            btn3.style.display = "none";
                        } else if (b3f == null) {
                            btn3.style.display = "none";
                        } else {
                            btn3.style.display = "inline-block";
                            btn3.onclick = b3f;
                        }
						if (b3f == null && b1f == null && b2f == null) {
							btn1.style.display = "none";
							btn1.style.display = "none";
							btn1.style.display = "none";
							const hideAlert = () => {
								body.style.transition = "all 0.1s ease";
								body.style.transform = "scale(0)  translate(-50%, -50%)";
								dark.style.transform = "scale(0)";
								document.body.style.overflow = "auto";
								document.body.style.margin = "";
								document.body.style.padding = "";
								setTimeout(function() {
										body.remove();
										dark.remove();
									}, 500);
							};
							
							setTimeout(hideAlert, sec * 1000 + wyt * 1000);
							
							dark.addEventListener("click", () => {
								clearTimeout(hideAlert);
								hideAlert();
							});
						}
                    }
				},
				
				y_closeAlert: function () {
					const body = document.getElementById("yahyacodesstudio________body_alert_created_");
					const dark = document.getElementById("yahyacodesstudio________dark_black_endofthinkingcapacity_of_alert_created_");
					body.style.transition = "all 0.1s ease";
                    body.style.transform = "scale(0)";
                    dark.style.transform = "scale(0)";
                    document.body.style.overflow = "auto";
                    document.body.style.margin = "";
                    document.body.style.padding = "";
					setTimeout(function() {
						body.remove();
						dark.remove();
					}, 500);
				}
			};
			
			return alertLib;
		})();


        // Usage:
		/*YahyaCodesStudio.y_alertNormal({
			Title: "Sorry!",
			Message: "we are trying to catch an annoying unknown hacker cheated our website",
			Icon: "crying",
			//ButtonsNumber: 2,
			//Duration: 0,
			//Time: 0,
			Height: 300,
			Button1: "Ok",
			Button1Func: okk,
			Button2: "I don't care",
			Button2Func: ign,
			//Button3: "Ignore",
			//Button3Func: function () { },
			//BackgroundColor: "#fff",
			Button1Border: "3px solid #45a049",
			Button2Border: "3px solid red",
			//Button3Border: "none",
			//Button1BorderOver: "none",
			//Button2BorderOver: "none",
			//Button3BorderOver: "none",
			Button1Color: "#000",
			Button2Color: "#000",
			//Button3Color: "#FFF",
			Button1ColorOver: "#FFF",
			Button2ColorOver: "#FFF",
			//Button3ColorOver: "#FFF",
			Button1BackgroundColor: "transparent",
			Button2BackgroundColor: "transparent",
			//Button3BackgroundColor: "#4CAF50",
			Button1BackgroundColorOver: "#45a049",
			Button2BackgroundColorOver: "red",
			//Button3BackgroundColorOver: "#45a049",
			//TitleColor: "#000",
			//MessageColor: "#000",
			AllowNotifications: true,
		});
		YahyaCodesStudio.y_closeAlert();
		*/
