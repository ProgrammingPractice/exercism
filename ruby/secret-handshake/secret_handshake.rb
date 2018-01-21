class SecretHandshake
  ENCODINGS = {
    1 => 'wink',
    2 => 'double blink',
    4 => 'close your eyes',
    8 => 'jump'
  }

  def initialize(decimal)
    @decimal = decimal
  end

  def commands
    return [] unless @decimal.is_a?(Integer)

    [].tap do |array|
      ENCODINGS.keys.each do |event_code|
        array << ENCODINGS[event_code] if check_binary_flag(@decimal, event_code)
      end

      array.reverse! if check_binary_flag(@decimal, 16)
    end
  end

  private

  def check_binary_flag(decimal, event_code)
    decimal & event_code == event_code
  end
end