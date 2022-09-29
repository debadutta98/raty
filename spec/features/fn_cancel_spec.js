xdescribe('#fn_cancel', function () {
  beforeEach(function () {
    this.el = Helper.create('#el');
  });

  describe('with :readOnly', function () {
    it('does not cancel', function () {
      // given
      var raty = new Raty('#el', { readOnly: true, score: 5 }).init();
      var stars = raty.self.querySelectorAll('img');

      // when
      raty.cancel();

      // then
      expect(Helper.extension(stars[0].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[1].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[2].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[3].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[4].src)).toEqual('star-on.png');
    });

    it('does not remove the score input value', function () {
      // given
      var raty = new Raty('#el', { readOnly: true, score: 5 }).init();

      // when
      raty.cancel();

      // then
      expect(raty.self.querySelector('input').value).toEqual('5');
    });
  });

  context('with click trigger', function () {
    context('as *false', function () {
      it('does not triggers click callback', function () {
        // given
        var raty = new Raty('#el', {
          score: 1,
          click: function () {
            this.clicked = true;
          },
        }).init();

        // when
        raty.cancel(false);

        // then
        expect(raty.self.clicked).toEqual(undefined);
      });

      context('with :target', function () {
        beforeEach(function () {
          this.target = Helper.create('#target');
        });

        context('and :targetKeep', function () {
          context('as *true', function () {
            it('sets the :targetText on target', function () {
              // given
              var raty = new Raty('#el', {
                cancel: true,
                target: '#target',
                targetKeep: true,
                targetText: 'targetText',
              }).init();

              // when
              raty.cancel();

              // then
              expect(this.target.text()).toEqual('targetText');
            });
          });
        });
      });
    });

    context('as *true', function () {
      it('triggers the :click callback', function () {
        // given
        var raty = new Raty('#el', {
          score: 1,
          click: function () {
            this.clicked = true;
          },
        }).init();

        // when
        raty.cancel(true);

        // then
        expect(raty.self.clicked).toEqual(true);
      });

      context('with :target', function () {
        beforeEach(function () {
          this.target = Helper.create('#target');
        });

        context('and :targetKeep', function () {
          context('as *true', function () {
            it('sets the :targetText on target', function () {
              // given
              var raty = new Raty('#el', {
                cancel: true,
                target: '#target',
                targetKeep: true,
                targetText: 'targetText',
              }).init();

              // when
              raty.cancel(true);

              // then
              expect(this.target.text()).toEqual('targetText');
            });
          });
        });
      });
    });
  });
});
