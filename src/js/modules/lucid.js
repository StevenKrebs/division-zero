/*
 * LucidScroll
 * 
 * Created by Shikkediel (c) 2013-2015 http://ataredo.com
 * 
 * Version: 2.5.4
 *
 * Requires: jQuery 1.8.0+
 * Included are mousewheel.js (3.1.12) and easing.js (1.3.1)
 *
 */

(function($) {$.fn.impulse = function(options) {

	var gate = $(window),

	set = $.extend(true, {
	target: $(),
	delay: false
	}, $.fn.impulse.default, options),

	selector = this, object = set.target, gist, area = {}, edge = [],
	annul, entity, brink = [], outset = [], halt = [], flow, turned = 0,
	interrupt, kinetic, morph = [], hit, way, speed, destination = [],
	momentum, initial, bound;

	if (window.requestAnimationFrame) var neoteric = true;
	elementAnalysis();
	detectOverflow();

	selector.each(function(index) {

		$(this).mousewheel(function(ambit, delta) {

			if (annul) return false;
			else if (set.delay == true) annul = true;

			hit = index;

			if (gist && selector.length > 1) {
			entity = $(this);
			brink[0] = edge[hit];
			}
			else {
			entity = object;
			brink = edge;
			}

			entity.each(function(cue) {
			var genesis = outset[cue] = $(this).scrollTop();
			if (delta == 1 && genesis == 0 || delta == -1 && genesis == brink[cue]) halt[cue] = true;
			else halt[cue] = false;
			});

			if (ceaseOperation()) {
			annul = false;
			if (set.propagate == true) return;
			else return false;
			}

			if (flow != delta) turned = 1;
			else turned = Math.min(set.constrain, turned+1);

			if (set.fluid && turned == 1) morph[hit] = 'curve';
			else if (turned) morph[hit] = set.effect;

			interrupt = false;
			kinetic = delta;
			way = -delta*set.range*Math.pow(set.leap, turned-1);
			speed = set.tempo*Math.pow(set.sloth, turned-1);

			entity.each(function(order) {
			destination[order] = outset[order]+way;
			});

			if (neoteric) {
			if (momentum) cancelAnimationFrame(momentum);
			initial = Date.now();
			momentum = requestAnimationFrame(streamCore);
			}
			else inciteSource();

			return false;
		});
	});

	gate.resize(function() {
	clearTimeout(bound);
	bound = setTimeout(detectOverflow, 100);
	});

	return this;

	function streamCore() {
	flow = kinetic;
	var present = Date.now(),
	elapsed = Math.min(present-initial, speed),
	advance = elapsed/speed,
	increase = $.easing[morph[hit]](advance, elapsed, 0, 1, speed);
	entity.each(function(key) {
	if (!halt[key]) {
	var goal = outset[key]+increase*way;
	$(this).scrollTop(goal);
	checkLimits($(this), key, advance);
	}
	});
	if (advance < 1 && !interrupt) momentum = requestAnimationFrame(streamCore);
	else annul = false;
	}

	function inciteSource() {
	flow = kinetic;
	entity.each(function(beat) {
	if (!halt[beat]) {
	$(this).stop().animate({scrollTop: destination[beat]}, {
	duration: speed,
	easing: morph[hit],
	progress: function(current, sequence) {checkLimits($(this), beat, sequence)},
	complete: function() {annul = false}
	});
	}
	});
	}

	function checkLimits(essence, rank, factor) {
	if (100*factor >= set.reset) turned = 0;
	if (onFringe(essence, rank)) {
	halt[rank] = true;
	if (!neoteric) essence.stop(true, true);
	if (ceaseOperation()) {
	interrupt = true;
	turned = 0;
	}
	}
	}

	function onFringe(matter, cipher) {
	var put = matter.scrollTop(),
	above = put == 0 && destination[cipher] < 0,
	below = put == brink[cipher] && destination[cipher] > brink[cipher];
	return above || below;
	}

	function ceaseOperation() {
	return halt.every(function(flag) {return flag});
	}

	function elementAnalysis() {
	var item = $(), main;
	if (!object.length) {
	gist = true;
	object = selector;
	}
	object.each(function() {
	if (topLevel(this)) {
	if (!main) {
	if (neoteric) item = item.add(gate);
	else item = item.add(baseTag());
	main = true;
	}
	}
	else item = item.add($(this));
	});
	set.target = object = item;
	object.each(function(zest) {
	if (topLevel(this)) area[zest] = 'hub';
	else area[zest] = 'sub';
	});
	if (gist && selector.length != object.length) selector = object;
	}

	function topLevel(sample) {
	var peak = [window,document,'HTML','BODY'];
	return peak.indexOf(sample) > -1 || peak.indexOf(sample.tagName) > -1
	}

	function baseTag() {
	var origin = gate.scrollTop();
	gate.scrollTop(1);
	if ($('html').scrollTop()) var root = $('html');
	else if ($('body').scrollTop()) root = $('body');
	else root = $('html, body');
	if (origin) gate.scrollTop(origin);
	else gate.scrollTop(0);
	return root;
	}

	function detectOverflow() {
	object.each(function(unit) {
	if (area[unit] == 'hub') edge[unit] = $(document).height()-gate.height();
	else edge[unit] = this.scrollHeight-$(this).height();
	});
	}
};

$.fn.impulse.default = {

	range: 135,
	leap: 1.35,
	tempo: 500,
	sloth: 1.1,
	constrain: 5,
	reset: 85,
	effect: 'easeOutSine',
	fluid: false,
	propagate: true
};
}(jQuery));

/*
 * THIS SOFTWARE IS PROVIDED BY THE CONTRIBUTORS "AS IS" THROUGH OPEN SOURCE AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
 * THE CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY OR
 * CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES, LOSS OF USE, DATA, PROFITS OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

// mousewheel.js - Copyright (c) 2013 under MIT license by Brandon Aaron http://brandon.aaron.sh/

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

// easing.js - Copyright (c) 2008 under BSD license by George McGinley Smith http://gsgd.co.uk/sandbox/jquery/easing/

jQuery.easing['curve']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{default:'easeOutQuad',swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.default](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});