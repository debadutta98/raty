xdescribe('#target', function () {
  beforeEach(function () {
    this.el = Helper.create('#el');
  });

  context('on mouseover', function () {
    context('with callback', function () {
      beforeEach(function () {
        this.el[0].setAttribute('data-target-selector', '#target');

        this.target = Helper.target('#target');
      });

      it('accepts the return as value', function () {
        // given
        var raty = new Raty('#el', {
          target: function () {
            return this.getAttribute('data-target-selector');
          },
        }).init();

        var star = Helper.last(raty.self.querySelectorAll('img'));

        // when
        Helper.trigger(star, 'mouseover');

        // then

        expect(this.target[0].innerHTML).toEqual('gorgeous');
      });
    });

    context('as div', function () {
      beforeEach(function () {
        this.target = Helper.target('#target');
      });

      it('sets the hint', function () {
        // given
        var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();
        var star = Helper.last(raty.self.querySelectorAll('img'));

        // when
        Helper.trigger(star, 'mouseover');

        // then
        expect(this.target[0].innerHTML).toEqual('gorgeous');
      });
    });

    context('as input', function () {
      beforeEach(function () {
        this.target = Helper.target('#target', 'input');
      });

      it('sets the hint', function () {
        // given
        var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();
        var star = Helper.last(raty.self.querySelectorAll('img'));

        // when
        Helper.trigger(star, 'mouseover');

        // then
        expect(document.querySelector('#target').value).toEqual('gorgeous');
      });
    });

    context('as textarea', function () {
      beforeEach(function () {
        this.target = Helper.target('#target', 'textarea');
      });

      it('sets the hint', function () {
        // given
        var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();
        var star = Helper.last(raty.self.querySelectorAll('img'));

        // when
        Helper.trigger(star, 'mouseover');

        // then
        expect(document.querySelector('#target').value).toEqual('gorgeous');
      });
    });

    context('as select', function () {
      beforeEach(function () {
        this.target = Helper.target('#target', 'select');
      });

      it('sets the hint', function () {
        // given
        var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();
        var star = Helper.last(raty.self.querySelectorAll('img'));

        // when
        Helper.trigger(star, 'mouseover');

        // then
        expect(document.querySelector('#target').value).toEqual('gorgeous');
      });
    });

    context('and mouseout', function () {
      context('as div', function () {
        beforeEach(function () {
          this.target = Helper.target('#target');
        });

        it('gets clear', function () {
          // given
          var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();

          // when
          Helper.trigger(raty.self, 'mouseover');
          Helper.trigger(raty.self, 'mouseout');

          // then
          expect(this.target[0].innerHTML).toEqual('');
        });
      });

      context('as textarea', function () {
        beforeEach(function () {
          this.target = Helper.target('#textarea');
        });

        it('gets clear', function () {
          // given
          var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();

          // when
          Helper.trigger(raty.self, 'mouseover');
          Helper.trigger(raty.self, 'mouseout');

          // then
          expect(this.target[0].innerHTML).toEqual('');
        });
      });

      context('as input', function () {
        beforeEach(function () {
          this.target = Helper.target('#target', 'input');
        });

        it('gets clear', function () {
          // given
          var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();

          // when
          Helper.trigger(raty.self, 'mouseover');

          // then
          expect(this.target[0].innerHTML).toEqual('');
        });
      });

      context('as select', function () {
        beforeEach(function () {
          this.target = Helper.target('#select');
        });

        it('gets clear', function () {
          // given
          var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();

          // when
          Helper.trigger(raty.self, 'mouseout');

          // then
          expect(this.target[0].innerHTML).toEqual('');
        });
      });
    });

    context('and click', function () {
      context('and mouseout', function () {
        context('as div', function () {
          beforeEach(function () {
            this.target = Helper.target('#target');
          });

          it('gets clear', function () {
            // given
            var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();

            // when
            Helper.trigger(raty.self, 'mouseover');
            Helper.trigger(raty.self, 'click');
            Helper.trigger(raty.self, 'mouseout');

            // then
            expect(this.target[0].innerHTML).toEqual('');
          });
        });

        context('as textarea', function () {
          beforeEach(function () {
            this.target = Helper.target('#textarea');
          });

          it('gets clear', function () {
            // given
            var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();

            // when
            Helper.trigger(raty.self, 'mouseover');
            Helper.trigger(raty.self, 'click');
            Helper.trigger(raty.self, 'mouseout');

            // then
            expect(this.target[0].innerHTML).toEqual('');
          });
        });

        context('as input', function () {
          beforeEach(function () {
            this.target = Helper.target('#target', 'input');
          });

          it('gets clear', function () {
            // given
            var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();

            var star = Helper.last(raty.self.querySelectorAll('img'));

            // when
            Helper.trigger(raty.self, 'mouseover');
            Helper.trigger(raty.self, 'click');
            Helper.trigger(raty.self, 'mouseout');

            // then
            expect(this.target[0].innerHTML).toEqual('');
          });
        });

        context('as select', function () {
          beforeEach(function () {
            this.target = Helper.target('#select');
          });

          it('gets clear', function () {
            // given
            var raty = new Raty('#el', { target: '#' + this.target[0].id }).init();

            // when
            Helper.trigger(raty.self, 'mouseover');
            Helper.trigger(raty.self, 'click');
            Helper.trigger(raty.self, 'mouseout');

            // then
            expect(this.target[0].innerHTML).toEqual('');
          });
        });
      });
    });
  });
});
