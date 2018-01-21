class SecretHandshake
  attr_reader :commands

  def initialize(foo)
    @commands = []
    convert_to_handshake(foo)
  end

  def convert_to_handshake(decimal)
    binary_representation = decimal.to_s(2)

    if binary_representation == '1'
      @commands << 'wink'
    elsif binary_representation == '10'
      @commands << 'double blink'
    elsif binary_representation == '100'
      @commands << 'close your eyes'
    elsif binary_representation == '1000'
      @commands << 'jump'
    end
  end
end